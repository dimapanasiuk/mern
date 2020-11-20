import React from "react";
import { array } from "prop-types";
import { CardText, Col } from "reactstrap";
import { size } from "lodash";
import emoji from "emoji-dictionary";
import uuid from "react-uuid";

import { CardS, ButtonS, RowS, CardTitleS } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const cards = feedbacks.map((item) => {
    return (
      <Col key={uuid()} sm={4}>
        <CardS>
          <CardTitleS>
            <h5>
              {emoji.getUnicode(":round_pushpin:")}
              &nbsp;{item.label}
            </h5>
            &nbsp;
            <ButtonS outline title="edit">
              {emoji.getUnicode(":pencil2:")}
            </ButtonS>
          </CardTitleS>
          <CardText>{item.desc}</CardText>
        </CardS>
      </Col>
    );
  });

  return <>{size(feedbacks) ? <RowS>{cards}</RowS> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
