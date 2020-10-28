import React, { useEffect, useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

import { Button, Input } from "antd";

const App = () => {
  let [response, setResponse] = useState("");
  let [post, setPost] = useState("");
  let [responseToPost, setResponseToPost] = useState("");
  let [deleteId, setDeleteId] = useState("");
  let [inputEdit, setInputEdit] = useState(false);
  // let [updateInput, setUpdateInput] = useState("");

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

    await fetch("/api/remove", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: deleteId }),
    });
  };

  const saveDataInputHandler = async (e) => {
    setInputEdit(!inputEdit);
    console.log("click");
    const res = await axios.put("/api/update", {
      id: "5f983c2b2539ae1764da2e3f",
      data: "update",
    });

    console.log(res.data.json);
  };

  const changeDataInputHandler = (e) => {
    setInputEdit(!inputEdit);
  };

  let users;
  if (response.length) {
    users = response.map((i) => {
      return (
        <div key={i._id} style={{ display: "flex" }}>
          {(() => {
            if (inputEdit) {
              return (
                <>
                  <Input
                    placeholder="Borderless"
                    bordered={false}
                    defaultValue={i.name}
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={saveDataInputHandler}
                  >
                    S
                  </Button>
                </>
              );
            } else {
              return (
                <>
                  <p> {i.name}</p>
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={changeDataInputHandler}
                  >
                    E
                  </Button>
                </>
              );
            }
          })()}

          <Button
            type="primary"
            onClick={(e) => setDeleteId(e.target.id)}
            id={i._id}
          >
            delete
          </Button>
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
