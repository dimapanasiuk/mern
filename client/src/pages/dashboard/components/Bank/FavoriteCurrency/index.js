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
import DatePicker from "reactstrap-date-picker";
import axios from "axios";
import makeAnimated from "react-select/animated";
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames";

import { copyPartOfStr } from "../../../../../utils";

let options = [];

const FavoriteCurrency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [basicCur, setBasicCur] = useState("");
  const [selectCurrencies, setSelectCurrencies] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const [save, setSave] = useState(false);

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((res) => {
      setCurrencies(res.data.rates);
    });

    const curValues = selectCurrencies.map((cur) => cur.value).join();
    if (basicCur && curValues.length && startDate && endDate) {
      axios
        .get(
          `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&symbols=${curValues}&base=${basicCur}`
        )
        .then((res) => {
          console.log(res.data);
        });
    }
  }, [save]);

  const crs = Object.keys(currencies);

  if (crs.length) {
    const res = crs.map((cur) => ({
      value: cur,
      label: cur,
      id: cur,
    }));
    options = res;
  }

  const chooseBasicCurrencyClickHandler = (currency) => {
    setBasicCur(currency.value);
  };

  const selectCurrenciesClickHandler = (c) => {
    setSelectCurrencies(c);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const startDateChangeHandler = (date) => {
    const partStr = copyPartOfStr(date, 0, 10);
    setStartDate(partStr);
  };

  const endDateChangeHandler = (date) => {
    const partStr = copyPartOfStr(date, 0, 10);
    setEndDate(partStr);
  };

  const saveClickHandler = () => {
    setSave(!save);
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
              <FormGroup>
                <h6> Please choose basic currency</h6>
                <Select
                  closeMenuOnSelect={false}
                  components={makeAnimated()}
                  options={options}
                  onChange={chooseBasicCurrencyClickHandler}
                />
              </FormGroup>
              <Button
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
              <FormGroup>
                <h6>Select the currencies you want to see on the chart</h6>
                <Select
                  closeMenuOnSelect={false}
                  components={makeAnimated()}
                  isMulti
                  options={options}
                  onChange={selectCurrenciesClickHandler}
                />
              </FormGroup>
              <Button
                outline
                color="info"
                onClick={() => {
                  toggle("1");
                }}
              >
                Back
              </Button>
              <Button
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
                <DatePicker
                  id="start-datepicker"
                  value={startDate}
                  onChange={startDateChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <h6>end date</h6>
              <FormGroup>
                <DatePicker
                  id="end-datepicker"
                  value={endDate}
                  onChange={endDateChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col sm="12">
              <Button
                outline
                color="info"
                onClick={() => {
                  toggle("2");
                }}
              >
                Back
              </Button>

              <Button outline color="success" onClick={saveClickHandler}>
                Save
              </Button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Card>
  );
};

export default FavoriteCurrency;
