import React from "react";
import { oneOfType, object, array } from "prop-types";
import { connect } from "react-redux";
import Chart from "./Chart";

const Bank = ({ dataForChart }) => {
  return <Chart data={dataForChart} />;
};

Bank.propTypes = {
  dataForChart: oneOfType([object, array]),
};

const mapDispatchToProps = (state) => {
  const { currenciesData } = state.currenciesDataReducer;
  return {
    dataForChart: currenciesData,
  };
};

export default connect(mapDispatchToProps)(Bank);
