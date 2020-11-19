import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";
import axios from "axios";
import GoogleMap from "./GoogleMap";
import SendFeedback from "./SendFeedback";
import { Div } from "./style";

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
      <Div>
        <GoogleMap locationData={locationData} />
        <SendFeedback />
      </Div>
    </>
  );
};

MyMap.propTypes = {
  id: string,
};

const mapStateToProps = (state) => state.getPlaceDataReducer;

export default connect(mapStateToProps)(MyMap);
