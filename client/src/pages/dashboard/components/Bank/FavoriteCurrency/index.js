import React, { useEffect, useState } from "react";
import Creatable from "react-select/creatable";
import { Card, CardTitle, FormGroup, Label } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import DatePicker from "reactstrap-date-picker";
import axios from "axios";
import makeAnimated from "react-select/animated";

import Menu from "./Menu";
import choseCurrenciesId from "../../../../../store/chooseCurrenciesId/actions";

let options = [];

const FavoriteCurrency = () => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get("https://www.nbrb.by/api/exrates/currencies").then((res) => {
      console.log("res data", res.data);
      setCurrencies(res.data);
    });
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

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 5;

  return (
    <Card body sm={10}>
      <CardTitle> Favorite currency</CardTitle>

      <Creatable
        components={makeAnimated({ Menu })}
        isMulti
        isValidNewOption={isValidNewOption}
        options={options}
        onChange={chooseCurrencyClickHandler}
      />

      <FormGroup>
        <Label>Please choose date</Label>
        <DatePicker id="example-datepicker" />
      </FormGroup>
    </Card>
  );
};

export default connect()(FavoriteCurrency);
