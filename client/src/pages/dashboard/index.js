import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

// eslint-disable-next-line
import classnames from "classnames";
import { useTranslation } from "react-i18next";

import Settings from "./components/Settings";
import Show from "./components/Show";
import { NavContent } from './style';

const ONE = '1';
const TWO = '2';

const DashBoard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(ONE);

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
              data-position={ONE}
              className={classnames({ active: activeTab === ONE })}
              onClick={toggle}
            >
              {t("Widgets")}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-position={TWO}
              className={classnames({ active: activeTab === TWO })}
              onClick={toggle}
            >
              {t("Settings")}
            </NavLink>
          </NavItem>
        </Nav>
      </NavContent>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={ONE}>
          <Show switcher={activeTab} />
        </TabPane>
        <TabPane tabId={TWO}>
          <Settings />
        </TabPane>
      </TabContent>
    </>
  );
};

export default DashBoard;
