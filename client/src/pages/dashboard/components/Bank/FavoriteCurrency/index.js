import React, { useEffect, useState } from "react";
import { Card, TabContent } from "reactstrap";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { size } from "lodash";

// eslint-disable-next-line import/no-unresolved
import getCurrenciesData from "store/currenciesData/actions"; // TODO : fix this problem

import Navigation from "./Navigation";
import BasicCurrency from "./BasicCurrency";
import SelectCurrencies from "./SelectCurrencies";
import Date from "./Date";
import { copyPartOfStr } from "../../../../../utils";

let options = []; // TODO: let replace const

const FavoriteCurrency = () => {
  const dispatch = useDispatch();

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

    if (basicCur && size(curValues) && startDate && endDate) {
      axios
        .get(
          `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&symbols=${curValues}&base=${basicCur}`
        )
        .then((res) => {
          dispatch(getCurrenciesData(res.data));
        });
    }
  }, [save]);

  const crs = Object.keys(currencies);

  if (size(crs)) {
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

  const toggle = (e) => {
    const tab = e.target.getAttribute("data-position");
    if (activeTab !== tab) setActiveTab(tab);
  };

  const startDateChangeHandler = (date) => {
    // TODO: write one func for startDateChangeHandler and end
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
      <Navigation activeTab={activeTab} />
      <TabContent activeTab={activeTab}>
        <BasicCurrency
          toggle={toggle}
          options={options}
          chooseCurrency={chooseBasicCurrencyClickHandler}
          basicCur={basicCur}
        />
        <SelectCurrencies
          toggle={toggle}
          options={options}
          chooseCurrencies={selectCurrenciesClickHandler}
          select={selectCurrencies}
        />
        <Date
          startFoo={startDateChangeHandler}
          endFoo={endDateChangeHandler}
          startDate={startDate}
          endDate={endDate}
          save={saveClickHandler}
          toggle={toggle}
        />
      </TabContent>
    </Card>
  );
};

export default connect()(FavoriteCurrency);
