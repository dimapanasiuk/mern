import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import Header from "./components/Header";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <LoginPage />
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
    </>
  );
};

export default App;
