import React from "react";
import { array } from "prop-types";
import { Col, CardTitle, CardText } from "reactstrap";
import { size } from "lodash";

import { CardStyle } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const cards = feedbacks.map((i) => {
    return (
      <Col key={i.id} sm={6}>
        <CardStyle>
          <CardTitle>{i.label} </CardTitle>
          <CardText>{i.desc}</CardText>
        </CardStyle>
      </Col>
    );
  });

  return <>{size(feedbacks) ? <div>{cards}</div> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
