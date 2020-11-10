import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import axios from "axios";
import { connect, useDispatch } from "react-redux";

import userID from "./store/login/action";
import Header from "./components/Header";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";
import DetailPage from "./pages/dashboard/components/Nhl/DetailPage";
import { ID } from "./utils";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await axios.get("/home");
      const user = await response.data;

      dispatch(userID(user.user[ID]));
    };
    fetchMyAPI();
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard/:name">
            <DetailPage />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="/profile">
            <Cabinet />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default connect()(App);
