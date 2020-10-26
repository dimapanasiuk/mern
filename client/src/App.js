import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";

const App = () => {
  let [response, setResponse] = useState("");
  let [post, setPost] = useState("");
  let [responseToPost, setResponseToPost] = useState("");

  const callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: post }),
    });
    const body = await response.text();

    setResponseToPost(body);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{response}</p>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post to Server:</strong>
        </p>
        <input
          type="text"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{responseToPost}</p>
    </div>
  );
};

// class App extends Component {
//   state = {
//     response: "",
//     post: "",
//     responseToPost: "",
//   };

//   componentDidMount() {
//     this.callApi()
//       .then((res) => this.setState({ response: res.express }))
//       .catch((err) => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch("/api/hello");
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("/api/world", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();

//     this.setState({ responseToPost: body });
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <strong>Post to Server:</strong>
//           </p>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={(e) => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
//}

export default App;
