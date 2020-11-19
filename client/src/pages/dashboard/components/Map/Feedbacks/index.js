import React from "react";
import { connect } from "react-redux";
import { array } from "prop-types";
import { CardGroup, CardTitle, CardText } from "reactstrap";
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

  return <CardGroup>{cards}</CardGroup>;
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
