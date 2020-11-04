import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/Header";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";

const App = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Switch>
          <Route path="/login">
            <LoginPage />
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

export default App;
