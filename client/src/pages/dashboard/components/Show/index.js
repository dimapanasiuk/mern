import React, { useState, useEffect } from "react";
import { string } from "prop-types";
import axios from 'axios';

import Nhl from "../Nhl";
import Bank from "../Bank";

const Show = ({ switcher }) => {

  const [currencyData, serCurrencyData] = useState([]);

  useEffect(() => {
    const foo = async () => {
      const response = await axios.get('/currency');
      const { data } = response

      if (data) serCurrencyData(data.currency);
    }

    foo();
  }, [switcher]);

  return (
    <>
      <Nhl />
      <Bank currencyData={currencyData} />
    </>
  );
};

Show.propTypes = {
  switcher: string,
}


export default Show;
