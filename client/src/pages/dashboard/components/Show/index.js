import React, { useState, useEffect } from "react";
import { string } from "prop-types";
import axios from 'axios';

import Nhl from "../Nhl";
import Bank from "../Bank";
import MyMap from "../Map";

const CURRENCY_LINK = 'currency';
const NHL_LINK = 'nhl';
const MAP_DATA = 'mapData';

const Show = ({ switcher }) => {
  const [currencyData, serCurrencyData] = useState([]);
  const [teams, setTeams] = useState({});
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    const getData = async (link, setData) => {
      const response = await axios.get(link);
      const { data } = response

      if (data) setData(data[link]);
    }

    getData(CURRENCY_LINK, serCurrencyData);
    getData(MAP_DATA, setMapData);
    getData(NHL_LINK, setTeams);

  }, [switcher]);

  return (
    <>
      <Nhl teams={teams} />
      <Bank currencyData={currencyData} />
      <MyMap mapData={mapData}/>
    </>
  );
};

Show.propTypes = {
  switcher: string,
}

export default Show;
