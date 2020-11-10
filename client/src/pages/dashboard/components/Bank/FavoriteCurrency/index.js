import React, { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import { Card, CardTitle } from "reactstrap";
import Select from "react-select";
import axios from "axios";
import { connect, useDispatch } from "react-redux";

import choseCurrenciesId from "../../../../../store/chooseCurrenciesId/actions";

let options = [];

const FavoriteCurrency = () => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await axios.get(
        "https://www.nbrb.by/api/exrates/currencies"
      );
      setCurrencies(response.data);
    };

    fetchMyAPI();
  }, []);

  if (currencies.length) {
    const res = currencies.map((cur) => ({
      value: cur.Cur_Name,
      label: cur.Cur_Name,
      id: cur.Cur_ID,
    }));
    options = res;
  }

  const chooseCurrencyClickHandler = (e) => {
    dispatch(choseCurrenciesId(e));
  };

  return (
    <Card body sm={10}>
      <CardTitle> FavoriteCurrency</CardTitle>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={options}
        onChange={chooseCurrencyClickHandler}
      />
    </Card>
  );
};

export default connect()(FavoriteCurrency);
