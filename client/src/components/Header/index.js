import React from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emoji from "emoji-dictionary";

import TranslateBasic from "../TranslateBasic";
import { NavigationBar, DivFlex, NavFlex } from "./style";
import "./style.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <NavigationBar color="dark" light expand="md">
      <NavFlex className="mr-auto" navbar>
        <DivFlex>
          <NavLink to="/" className="logo">
            {emoji.getUnicode(":stars:")}
          </NavLink>
          <NavItem>
            <NavLink
              exact
              to="/"
              className="link-nav"
              activeClassName="active-route"
            >
              {t("Home")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/dashboard"
              className="link-nav"
              activeClassName="active-route"
            >
              {t("Dashboard")}
            </NavLink>
          </NavItem>
        </DivFlex>
        <DivFlex>
          <NavItem>
            <NavLink
              to="/login-page"
              className="link-nav"
              activeClassName="active-route"
            >
              {t("Login")}
            </NavLink>
          </NavItem>
          <NavItem>
            <TranslateBasic />
          </NavItem>
        </DivFlex>
      </NavFlex>
    </NavigationBar>
  );
};

export default Header;
