import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  Card,
  FormGroup,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import { connect, useDispatch } from "react-redux";
import DatePicker from "reactstrap-date-picker";
import axios from "axios";
import makeAnimated from "react-select/animated";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames";

import choseCurrenciesId from "../../../../../store/chooseCurrenciesId/actions";

let options = [];

const FavoriteCurrency = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((res) => {
      setCurrencies(res.data.rates);
    });
  }, []);

  const crs = Object.keys(currencies);

  if (crs.length) {
    const res = crs.map((cur) => ({
      value: cur,
      label: cur,
      id: cur,
    }));
    options = res;
  }

  const chooseCurrencyClickHandler = (e) => {
    dispatch(choseCurrenciesId(e));
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Card body sm={10}>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Step 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Step 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Step 3
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h6> Please choose basic currency</h6>
              <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={options}
                onChange={chooseCurrencyClickHandler}
              />
              <Button
                outline
                color="primary"
                onClick={() => {
                  toggle("2");
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <h6>Select the currency you want to see on the chart</h6>
              <Select
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={options}
                onChange={chooseCurrencyClickHandler}
              />
              <Button
                outline
                color="primary"
                onClick={() => {
                  toggle("1");
                }}
              >
                Back
              </Button>
              <Button
                outline
                color="primary"
                onClick={() => {
                  toggle("3");
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <h6>start date</h6>
              <FormGroup>
                <DatePicker id="example-datepicker" />
              </FormGroup>
            </Col>
            <Col sm="6">
              <h6>end date</h6>
              <FormGroup>
                <DatePicker id="example-datepicker" />
              </FormGroup>
            </Col>
            <Col sm="12">
              <Button
                outline
                color="primary"
                onClick={() => {
                  toggle("2");
                }}
              >
                Back
              </Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Card>
  );
};

export default connect()(FavoriteCurrency);
