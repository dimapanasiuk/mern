import React, { useState, useEffect } from "react";
import { string } from "prop-types";
import axios from 'axios';

import Nhl from "../Nhl";
import Bank from "../Bank";
import MyMap from "../Map";

const CURRENCY_LINK = 'currency';
const NHL_LINK = 'nhl';

const Show = ({ switcher }) => {
  const [currencyData, serCurrencyData] = useState([]);
  const [teams, setTeams] = useState({});

  useEffect(() => {
    const getData = async (link, setData) => {
      const response = await axios.get(link);
      const { data } = response

      if (data) setData(data[link]);
    }

    getData(CURRENCY_LINK, serCurrencyData);
    getData(NHL_LINK, setTeams);
  }, [switcher]);

  return (
    <>
      <Nhl teams={teams} />
      <Bank currencyData={currencyData} />
      <MyMap />
    </>
  );
};

Show.propTypes = {
  switcher: string,
}

export default Show;
