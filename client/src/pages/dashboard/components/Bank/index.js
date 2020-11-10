import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { any } from "prop-types";

import axios from "axios";
import Chart from "./Chart";

const Bank = ({ id }) => {
  const [dataCur, setDataCur] = useState([]);

  useEffect(() => {
    const fetchMyAPI = async (cur) => {
      const response = await axios.get(
        `https://www.nbrb.by/api/exrates/currencies/${cur}`
      );
      const cs = await response.data;

      setDataCur([...dataCur, cs]);
    };

    fetchMyAPI(192);
  }, []);

  console.log("Bank ids", id, dataCur);
  return <Chart />;
};

Bank.propTypes = {
  id: any,
};

const mapDispatchToProps = (state) => {
  // console.log("state", state.choseCurrenciesIdReduce);
  return {
    id: state.choseCurrenciesIdReducer.curriencies,
  };
};

export default connect(mapDispatchToProps)(Bank);
