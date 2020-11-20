import React from "react";
import { array } from "prop-types";
import { CardTitle, CardText } from "reactstrap";
import { size } from "lodash";

import { CardStyle, ColStyle } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const cards = feedbacks.map((i) => {
    return (
      <ColStyle key={i.id} sm={6}>
        <CardStyle>
          <CardTitle>{i.label} </CardTitle>
          <CardText>{i.desc}</CardText>
        </CardStyle>
      </ColStyle>
    );
  });

  return <>{size(feedbacks) ? <div>{cards}</div> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
