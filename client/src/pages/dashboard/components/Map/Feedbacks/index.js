import React from "react";
import { array } from "prop-types";
import { CardGroup, CardTitle, CardText } from "reactstrap";
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

  return <>{size(feedbacks) ? <CardGroup>{cards}</CardGroup> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
