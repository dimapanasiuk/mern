import React from "react";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import Header from "./components/Header";
import Cabinet from "./pages/cabinet";
import { Switch, Route } from "react-router-dom";

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
