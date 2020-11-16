import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames";
import styled from "styled-components";

import Settings from "./components/Settings";
import Show from "./components/Show";

const NavContent = styled(Nav)`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin: 20px 0;
  border: none;
`;

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (e) => {
    const tab = e.target.getAttribute("data-position");
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NavContent tabs>
        <Nav tabs>
          <NavItem>
            <NavLink
              data-position="1"
              className={classnames({ active: activeTab === "1" })}
              onClick={toggle}
            >
              Widgets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-position="2"
              className={classnames({ active: activeTab === "2" })}
              onClick={toggle}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>
      </NavContent>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Settings />
          <Show />
        </TabPane>
        <TabPane tabId="2">
          <Settings />
        </TabPane>
      </TabContent>
    </>
  );
};

export default DashBoard;
