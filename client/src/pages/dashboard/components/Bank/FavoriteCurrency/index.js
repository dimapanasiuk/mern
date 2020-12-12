import React, { useEffect, useState } from "react";
import { Card, TabContent } from "reactstrap";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { size } from "lodash";

// eslint-disable-next-line import/no-unresolved
import getCurrenciesData from "store/currenciesData/actions"; // TODO : fix this problem

// eslint-disable-next-line import/no-unresolved
import { copyPartOfStr } from "utils"; // TODO : fix this problem
import Navigation from "./Navigation";
import BasicCurrency from "./BasicCurrency";
import SelectCurrencies from "./SelectCurrencies";
import Date from "./Date";

const getOptions = (crs) => {
  if (size(crs)) {
    return crs.map((cur) => ({
      value: cur,
      label: cur,
      id: cur,
    }));
  }
  return [];
};

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
    if (basicCur && selectCurrencies.length && startDate && endDate) {
      const currencyData = { basicCur, selectCurrencies, startDate, endDate }
      axios
        .put("/currency", { currencyData })
        .then((response) => {
          console.log('response', response)
        })
        .catch((error) => {
          console.log(error);
        });
    }

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

  const options = getOptions(crs);

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

  const dateChangeHandler = (date, changeHandler) => {
    const partStr = copyPartOfStr(date, 0, 10);
    changeHandler(partStr);
  };

  const startDateChangeHandler = (date) =>
    dateChangeHandler(date, setStartDate);

  const endDateChangeHandler = (date) => dateChangeHandler(date, setEndDate);

  const saveClickHandler = () => setSave(!save);

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
