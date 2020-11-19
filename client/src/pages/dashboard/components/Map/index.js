import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";
import axios from "axios";
import { size } from "lodash";

import GoogleMap from "./GoogleMap";
import SendFeedback from "./SendFeedback";
import Feedbacks from "./Feedbacks";

import { Div, CardStyle } from "./style";

const MyMap = ({ id }) => {
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    const API_KEY = "AIzaSyCuMJ3dhADqNoE4tGuWTI3_NlwBihj5BtE";

    axios
      .post("/map", { placeId: id, API_KEY })
      .then((data) => {
        if (data.data.status === "OK") {
          const { location } = data.data.result.geometry;
          setLocationData(location);
        }
      })
      .catch((e) => console.warn("💡🛑", e));
  }, [id]);

  return (
    <>
      <CardStyle>
        <Div>
          <GoogleMap locationData={locationData} />
          <SendFeedback />
        </Div>
      </CardStyle>
      <Feedbacks />
    </>
  );
};

MyMap.propTypes = {
  id: string,
};

const mapStateToProps = (state) => {
  const len = size(state.getPlaceDataReducer) - 1;
  const result = state.getPlaceDataReducer[len];
  return result || { id: "" };
};
export default connect(mapStateToProps)(MyMap);
