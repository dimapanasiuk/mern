import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import axios from "axios";

const TestButton = styled.button`
  font-size: 1em;
  background-color: black;
  color: white;
  border: none;
`;

const CustomBox = styled("div")`
  width: 300px;
  background-color: ${(props) => (props ? "red" : "green")};
`;

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("home")
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userData = () => {
    console.log("----------------user", user);
    if (!user) {
      return (
        <p>
          Welcome! Please <a href="/login">log in</a>.
        </p>
      );
    } else {
      return (
        <p>
          Hello, {user.username}. View your <a href="/profile">profile</a>.
        </p>
      );
    }
  };
  
  return (
    <>
      <h1> Home</h1>
      <TestButton>Styledcomponent button </TestButton>
      <Button color="danger">Reactstrap button</Button>
      <CustomBox active={1}>
        <h2>
          Put any other react or custom styled-component within this component
        </h2>
        <Button>Click me</Button>
      </CustomBox>
      {userData()}
    </>
  );
};

export default Home;
