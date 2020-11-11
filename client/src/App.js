import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import Header from "./components/Header";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";
import DetailPage from "./pages/dashboard/components/Nhl/DetailPage";

const App = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Redirect from="/" to="/dashboard" />
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard/:name">
            <DetailPage />
          </Route>
          <Route exact path="/dashboard">
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
