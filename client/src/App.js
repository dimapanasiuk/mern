import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import { has } from 'lodash';
import axios from "axios";

import { connect, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import sendUserData from 'store/userData/actions'

import Header from "./components/Header";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";
import DetailPage from "./pages/dashboard/components/Nhl/DetailPage";
import Footer from "./components/Footer";
import { Div } from "./style";


const App = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/home')
      .then(data => {

        if (data.status === 200 && has(data.data, 'user')) {
          const { user } = data.data;
          setUserData(user);
          dispatch(sendUserData(user));
        }
      });
  }, []);

  return (
    <Div>
      <Header />
      <Container fluid>
        <Redirect from="/" to="/dashboard" />
        <Switch>
          <Route path="/login-page">
            <LoginPage userData={userData} />
          </Route>
          <Route path="/dashboard/:name">
            <DetailPage />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/profile">
            <Cabinet userData={userData} />
          </Route>
          <Route path="/registration">
            <Registration userData={userData} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Div>
  );
};

export default connect()(App);
