import React, { useState, useEffect } from "react";
import { object, string } from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

import Nhl from "../Nhl";
import Bank from "../Bank";
import MyMap from "../Map";

const CURRENCY_LINK = "currency";
const NHL_LINK = "nhl";
const MAP_DATA = "mapData";

const Show = ({ switcher, updateDesc }) => {
  const [currencyData, serCurrencyData] = useState([]);
  const [teams, setTeams] = useState({});
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    const getData = async (link, setData) => {
      const response = await axios.get(link);
      const { data } = response

      if (Object.keys(data).length) setData(data[link]);
    }

    getData(CURRENCY_LINK, serCurrencyData);
    getData(MAP_DATA, setMapData);
    getData(NHL_LINK, setTeams);


  }, [switcher, updateDesc]);

  return (
    <>
      <Nhl teams={teams} />
      <Bank currencyData={currencyData} />
      <MyMap mapData={mapData} />
    </>
  );
};

Show.propTypes = {
  switcher: string,
  updateDesc: object,
}

const mapStateToProps = (state) => ({ updateDesc: state.sendMapFeedbackReducer });

export default connect(mapStateToProps)(Show);
