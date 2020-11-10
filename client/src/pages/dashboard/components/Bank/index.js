import React, { useEffect } from "react";
import axios from "axios";
import { array } from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

const START = "2020-1-5";
const END = "2020-1-20";

const Bank = ({ ids }) => {
  useEffect(() => {
    if (ids.length) {
      const cur = ids[0];

      axios
        .get(
          `https://www.nbrb.by/api/exrates/rates/dynamics/${cur}?startDate=${START}&endDate=${END}`
        )
        .then((data) => console.log("bank", data.data));
    }
  }, [ids]);

  return <Chart />;
};

Bank.propTypes = {
  ids: array,
};

const mapDispatchToProps = (state) => {
  const { currencies } = state.choseCurrenciesIdReducer;
  const curs = currencies.map((currency) => currency.id);
  console.log("curs", curs);
  return {
    ids: curs,
  };
};

export default connect(mapDispatchToProps)(Bank);
