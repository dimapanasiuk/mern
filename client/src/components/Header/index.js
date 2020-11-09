import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { string } from "prop-types";
import { Collapse, Navbar, Nav, NavItem } from "reactstrap";

const RouterLink = styled(Link)`
  color: white;
  margin-right: 10px;
  text-decoration: none;

  :hover {
    color: red;
  }
`;

const Header = ({ id }) => {
  console.log("id", id);
  return (
    <div>
      <Navbar color="dark" light expand="md">
        <RouterLink to="/">Home</RouterLink>
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <RouterLink to="/dashboard">Dashboard</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink to="/login">Login</RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink to="/registration">Registration</RouterLink>
            </NavItem>
            {(() => {
              if (id) {
                return (
                  <NavItem>
                    <RouterLink to="/cabinet">Cabinet</RouterLink>
                  </NavItem>
                );
              }
              return null;
            })()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  id: string,
};

const mapDispatchToProps = (state) => {
  return {
    id: state.enterCabinetReducer.userId,
  };
};

export default connect(mapDispatchToProps)(Header);
