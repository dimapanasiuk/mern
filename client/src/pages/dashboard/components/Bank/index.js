import React, { useEffect, useState } from "react";
import axios from "axios";
import { array } from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

const START = "2020-10-1";
const END = "2020-10-11";

const Bank = ({ ids }) => {
  const [dataForChart, setDataForChart] = useState([]);

  useEffect(() => {
    if (ids.length) {
      const cur = ids[0];

      axios
        .get(
          `https://www.nbrb.by/api/exrates/rates/dynamics/${cur}?startDate=${START}&endDate=${END}`
        )
        .then((data) => {
          setDataForChart(data.data);
          console.log('data', data);
        });
    }
  }, [ids]);

  return <Chart data={dataForChart} />;
};

Bank.propTypes = {
  ids: array,
};

const mapDispatchToProps = (state) => {
  const { currencies } = state.choseCurrenciesIdReducer;
  const curs = currencies.map((currency) => currency.id);
  return {
    ids: curs,
  };
};

export default connect(mapDispatchToProps)(Bank);
