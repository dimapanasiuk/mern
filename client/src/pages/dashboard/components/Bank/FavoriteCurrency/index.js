/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";

import Creatable from "react-select/creatable";

import makeAnimated from "react-select/animated";
import { components } from "react-select";

import { Card, CardTitle, FormGroup, Label } from "reactstrap";

import axios from "axios";
import { connect, useDispatch } from "react-redux";
import DatePicker from "reactstrap-date-picker";

import choseCurrenciesId from "../../../../../store/chooseCurrenciesId/actions";

let options = [];

const Menu = (props) => {
  // eslint-disable-next-line react/prop-types
  const optionSelectedLength = props.getValue().length || 0;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <components.Menu {...props}>
      {optionSelectedLength < 5 ? (
        // eslint-disable-next-line react/prop-types
        props.children
      ) : (
        <div style={{ margin: 15 }}>Max limit achieved</div>
      )}
    </components.Menu>
  );
};

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

  const isValidNewOption = (inputValue, selectValue) =>
    inputValue.length > 0 && selectValue.length < 5;

  return (
    <Card body sm={10}>
      <CardTitle> FavoriteCurrency</CardTitle>

      <Creatable
        components={makeAnimated(Menu)}
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
