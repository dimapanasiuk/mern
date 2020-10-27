import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";

import "./App.css";

const App = () => {
  let [response, setResponse] = useState("");
  let [post, setPost] = useState("");
  let [responseToPost, setResponseToPost] = useState("");
  let [deleteId, setDeleteId] = useState("");

  const callApi = async () => {
    const response = await fetch("api/users");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  console.log("our response", response);

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/api/create", { post: post })
      .then(function (response) {
        setResponseToPost(response.request.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    console.log("test submit", deleteId);
    await fetch("/api/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: deleteId }),
    });
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
