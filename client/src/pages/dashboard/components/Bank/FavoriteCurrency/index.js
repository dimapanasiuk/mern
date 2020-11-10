import React, { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";
import { Card, CardTitle } from "reactstrap";
import Select from "react-select";
import axios from "axios";

let options = [];

const FavoriteCurrency = () => {
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

  return (
    <Card body sm={10}>
      <CardTitle> FavoriteCurrency</CardTitle>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={options}
        // onChange={choosesItems}
      />
    </Card>
  );
};

export default FavoriteCurrency;
