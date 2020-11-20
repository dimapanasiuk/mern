import React, { useState } from "react";
import { array } from "prop-types";
import { CardText, Col, Row, Tooltip } from "reactstrap";
import { size } from "lodash";
import emoji from "emoji-dictionary";

import { CardS, ButtonS, CardTitleS } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const cards = feedbacks.map((i) => {
    return (
      <Col key={i.id} sm={4}>
        <CardS>
          <CardTitleS>
            <h5>
              {" "}
              {emoji.getUnicode(":round_pushpin:")}
              &nbsp;{i.label}
            </h5>
            &nbsp;
            <ButtonS outline id={i.id}>
              {emoji.getUnicode(":pencil2:")}
            </ButtonS>
            <Tooltip
              placement="top"
              isOpen={tooltipOpen}
              target={i.id}
              toggle={toggle}
            >
              Edit
            </Tooltip>
          </CardTitleS>
          <CardText>{i.desc}</CardText>
        </CardS>
      </Col>
    );
  });

  return <>{size(feedbacks) ? <Row>{cards}</Row> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
