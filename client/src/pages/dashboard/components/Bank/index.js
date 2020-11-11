import React from "react";
import { any } from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

const Bank = ({ dataForChart }) => {
  return <Chart data={dataForChart} />;
};

Bank.propTypes = {
  dataForChart: any,
};

const mapDispatchToProps = (state) => {
  const { currenciesData } = state.currenciesDataReducer;
  return {
    dataForChart: currenciesData,
  };
};

export default connect(mapDispatchToProps)(Bank);
