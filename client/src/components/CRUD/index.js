import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Input } from "antd";

const CRUD = () => {
  let [response, setResponse] = useState("");
  let [post, setPost] = useState("");
  let [responseToPost, setResponseToPost] = useState("");
  let [deleteId, setDeleteId] = useState("");
  let [inputEdit, setInputEdit] = useState(false);

  let [defaultInputVal, setDefaultInputVal] = useState("");
  let [editInputVal, setEditInputVal] = useState("");
  let [editInputId, setEditInputId] = useState("");

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
    const res = await axios.put("/api/update", {
      id: editInputId,
      prevVal: defaultInputVal,
      newVal: editInputVal,
    });

    console.log(res.data.json);
  };

  const onChangeHandler = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    setEditInputId(id);
    setEditInputVal(value);
  };

  const changeDataInputHandler = (e) => {
    const defaultValue = e.target.previousElementSibling.innerText;
    setInputEdit(!inputEdit);
    setDefaultInputVal(defaultValue);
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
                    id={i._id}
                    placeholder="Borderless"
                    bordered={false}
                    defaultValue={i.name}
                    onChange={onChangeHandler}
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
    <>
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
    </>
  );
};

export default CRUD;
