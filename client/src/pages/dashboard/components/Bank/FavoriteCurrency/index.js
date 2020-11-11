import React, { useEffect, useState } from "react";
import { Card, TabContent } from "reactstrap";
import axios from "axios";

import Navigation from "./Navigation";
import BasicCurrency from "./BasicCurrency";
import SelectCurrencies from "./SelectCurrencies";
import Date from "./Date";
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
      <Navigation activeTab={activeTab} />
      <TabContent activeTab={activeTab}>
        <BasicCurrency
          toggle={toggle}
          options={options}
          chooseCurrency={chooseBasicCurrencyClickHandler}
        />

        <SelectCurrencies
          toggle={toggle}
          options={options}
          chooseCurrencies={selectCurrenciesClickHandler}
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

export default FavoriteCurrency;
