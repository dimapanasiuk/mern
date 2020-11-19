import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames";
import { string } from "prop-types";
import { useTranslation } from "react-i18next";

import "./style.css";

const Navigation = ({ activeTab }) => {
  const { t } = useTranslation();

  return (
    <Nav tabs>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "1" })}>
          {t("Step")} 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "2" })}>
          {t("Step")} 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={classnames({ active: activeTab === "3" })}>
          {t("Step")}3
        </NavLink>
      </NavItem>
    </Nav>
  );
};

Navigation.propTypes = {
  activeTab: string,
};

export default Navigation;
