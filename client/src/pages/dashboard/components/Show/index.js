import React, { useState, useEffect } from "react";
import { string } from "prop-types";
import axios from 'axios';

import Nhl from "../Nhl";
import Bank from "../Bank";

const Show = ({ switcher }) => {
  const [currencyData, serCurrencyData] = useState([]);
  const [teams, setTeams] = useState({});

  useEffect(() => {
    const cur = 'currency';
    const nhl = 'nhl';

    const getData = async (link, setData) => {
      const response = await axios.get(link);
      const { data } = response

      if (data) setData(data[link]);
    }

    getData(cur, serCurrencyData);
    getData(nhl, setTeams);
  }, [switcher]);

  console.log('teams', teams);

  return (
    <>
      <Nhl teams={teams} />
      <Bank currencyData={currencyData} />
    </>
  );
};

Show.propTypes = {
  switcher: string,
}

export default Show;
