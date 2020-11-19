import React from "react";
import { connect } from "react-redux";
import { size } from "lodash";
import { Alert } from "reactstrap";

import { array } from "prop-types";
import Feedbacks from "./Feedbacks";
import ShowMap from "./ShowMap";

const MyMap = ({ data }) => {
  return (
    <>
      {!size(data) ? (
        <Alert color="success">Please choose your favorite paces</Alert>
      ) : (
        <>
          <ShowMap locationData={data} />
          <Feedbacks feedbacks={data} />
        </>
      )}
    </>
  );
};

MyMap.propTypes = {
  data: array,
};

const mapStateToProps = (state) => {
  const allPlaces = state.sendMapFeedbackReducer;
  const placesInfo = allPlaces.filter((i) => i.id !== "");

  return { data: placesInfo };
};

export default connect(mapStateToProps)(MyMap);
