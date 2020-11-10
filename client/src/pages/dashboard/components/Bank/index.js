import React, { useEffect } from "react";
import axios from "axios";
import { array } from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

const Bank = ({ ids }) => {
  useEffect(() => {
    const fetchMyAPI = async () => {
      const res = await axios.get(
        "https://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30"
      );
      const curInfo = await res.data;
      console.log(curInfo);
    };

    fetchMyAPI();
  }, [ids]);

  return <Chart />;
};

Bank.propTypes = {
  ids: array,
};

const mapDispatchToProps = (state) => {
  // console.log("state", state.choseCurrenciesIdReduce);
  return {
    ids: state.choseCurrenciesIdReducer.currencies,
  };
};

export default connect(mapDispatchToProps)(Bank);
