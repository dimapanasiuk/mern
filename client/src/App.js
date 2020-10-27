import React, { useEffect, useState } from "react";

import logo from "./logo.svg";

import "./App.css";

const App = () => {
  let [response, setResponse] = useState("");
  let [post, setPost] = useState("");
  let [responseToPost, setResponseToPost] = useState("");
  let [deleteId, setDeleteId] = useState("");

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

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: deleteId }),
    });
    const body = await response.text();

    setResponseToPost(body);
  };

  let users;
  if (response.length) {
    users = response.map((i) => {
      return (
        <div key={i._id} style={{ display: "flex" }}>
          <p> {i.name}</p>
          <button onClick={(e) => setDeleteId(e.target.id)} id={i._id}>
            delete{" "}
          </button>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <form onSubmit={handleDelete}>{users}</form>
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

export default App;
