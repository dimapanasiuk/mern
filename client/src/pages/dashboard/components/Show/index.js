import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { string } from "prop-types";
import axios from 'axios';

import Nhl from "../Nhl";
import Bank from "../Bank";

const Show = ({ id, switcher }) => {

  const [currencyData, serCurrencyData] = useState([]);

  useEffect(() => {
    const foo = async (i) => {
      if (id) {
        const response = await axios.post('/currency', { id: i });

        const { data } = response
        if (data) serCurrencyData(data.currency);
      }
    }
    foo(id);

  }, [id, switcher]);

  return (
    <>
      <Nhl />
      <Bank currencyData={currencyData} />
    </>
  );
};

Show.propTypes = {
  id: string,
  switcher: string,
}

const mapStateToProps = (state) => {
  let userId = '';
  if (Object.values(state.getUserDataReducer)) {
    // eslint-disable-next-line no-underscore-dangle
    userId = state.getUserDataReducer._id;
  }

  return { id: userId };
}

export default connect(mapStateToProps)(Show);
