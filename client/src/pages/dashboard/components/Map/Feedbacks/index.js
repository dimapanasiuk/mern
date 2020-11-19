import React from "react";
import { connect } from "react-redux";
import { array } from "prop-types";
import { Alert, CardGroup, CardTitle, CardText } from "reactstrap";
import { size } from "lodash";

import { CardStyle } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const cards = feedbacks.map((i) => {
    return (
      <CardStyle key={i.id}>
        <CardTitle>{i.label} </CardTitle>
        <CardText>{i.desc}</CardText>
      </CardStyle>
    );
  });

  return (
    <>
      {size(cards) ? (
        <CardGroup>{cards}</CardGroup>
      ) : (
        <Alert color="success">Please choose your favorite place </Alert>
      )}
    </>
  );
};

Feedbacks.propTypes = {
  feedbacks: array,
};

const mapStateToProps = (state) => {
  const allPlaces = state.sendMapFeedbackReducer;
  const placesInfo = allPlaces.filter((i) => i.id !== "");

  return { feedbacks: placesInfo };
};

export default connect(mapStateToProps)(Feedbacks);
