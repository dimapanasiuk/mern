import React, { useState, useEffect } from "react";
import { Switch, Route, } from "react-router-dom";
import { Container } from "reactstrap";
import { has, isEmpty } from "lodash";
import { connect } from "react-redux";
import { object } from "prop-types";
import axios from "axios";

import { AuthContext } from "context/auth";
import PrivateRoute from "routes/PrivateRoute";
import Header from "./components/Header";
import Home from "./pages/home";
import DashBoard from "./pages/dashboard";
import LoginPage from "./pages/login";
import Cabinet from "./pages/cabinet";
import Registration from "./pages/registration";
import DetailPage from "./pages/dashboard/components/Nhl/DetailPage";
import Footer from "./components/Footer";
import { Div } from "./style";


const App = ({ userDataLogin }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get("/home")
      .then(data => {
        if (data.status === 200 && has(data.data, "user")) {
          const { user } = data.data;
          setUserData(user);
        }
      });
  }, [userDataLogin]);

  const isLogin = !isEmpty(userData);

  return (
    <AuthContext.Provider value={isLogin}>
      <Div>
        <Header />
        <Container fluid>
          <Switch>
            <Route path="/login-page">
              <LoginPage userData={userData} />
            </Route>
            <Route path="/dashboard/:name">
              <DetailPage />
            </Route>
            <PrivateRoute path="/dashboard" component={DashBoard} />
            <Route path="/profile">
              <Cabinet userData={userData} />
            </Route>
            <Route path="/registration" >
              <Registration userData={userData} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Div>
    </AuthContext.Provider>
  );
};

App.propTypes = {
  userDataLogin: object
};

const mapStateToProps = (state) => ({ userDataLogin: state.sendUserDataReducer });

export default connect(mapStateToProps)(App);
