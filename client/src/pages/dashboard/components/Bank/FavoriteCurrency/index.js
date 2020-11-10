import React, { useEffect, useState } from "react";
import Creatable from "react-select/creatable";
import { Card, CardTitle, FormGroup, Label } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import DatePicker from "reactstrap-date-picker";
import axios from "axios";

import Menu from "./Menu";
import choseCurrenciesId from "../../../../../store/chooseCurrenciesId/actions";

let options = [];

const FavoriteCurrency = () => {
  const dispatch = useDispatch();
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios("https://www.nbrb.by/api/exrates/currencies").then((res) =>
      setCurrencies(res.data)
    );
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
      <CardTitle> FavoriteCurrency</CardTitle>

      <Creatable
        components={{ Menu }}
        isMulti
        isValidNewOption={isValidNewOption}
        options={options}
        onChange={chooseCurrencyClickHandler}
      />

      <FormGroup>
        <Label>Please choose date</Label>
        <DatePicker
          id="example-datepicker"
          //   value={new Date}
          // onChange= {(v,f) => this.handleChange(v, f)}
        />
      </FormGroup>
    </Card>
  );
};

export default connect()(FavoriteCurrency);
