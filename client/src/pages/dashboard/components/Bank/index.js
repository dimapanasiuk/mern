import React, { useState, useEffect } from "react";
import { array } from "prop-types";
import { size } from "lodash";
import axios from "axios";
import Chart from "./Chart";

const Bank = ({ currencyData }) => {
  const [charCurrencyData, setCharCurrencyData] = useState([]);

  useEffect(() => {
    const { basicCurrency, currencies, dateStart, dateEnd } = currencyData;
    if (basicCurrency && size(currencies) && dateStart && dateEnd) {
      const curs = currencies.map(i => i.label).join();

      axios.get(
        `https://api.exchangeratesapi.io/history?start_at=${dateStart}&end_at=${dateEnd}&symbols=${curs}&base=${basicCurrency}`)
        .then((res) => setCharCurrencyData(res.data))
    }
  }, [currencyData]);

  return <Chart data={charCurrencyData} />;
};

Bank.propTypes = {
  currencyData: array,
};

export default (Bank);
