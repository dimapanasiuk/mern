import React, { useState } from "react";
import { array } from "prop-types";
import { CardText, Tooltip } from "reactstrap";
import { size } from "lodash";
import emoji from "emoji-dictionary";

import { CardS, ColS, ButtonS, CardTitleS } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const cards = feedbacks.map((i) => {
    return (
      <ColS key={i.id} sm={6}>
        <CardS>
          <CardTitleS>
            <h5>
              {" "}
              {emoji.getUnicode(":round_pushpin:")}
              &nbsp;{i.label}
            </h5>
            &nbsp;
            <ButtonS id={i.id} outline>
              {emoji.getUnicode(":pencil2:")}
            </ButtonS>
          </CardTitleS>
          <CardText>{i.desc}</CardText>

          <span href="#">tooltip</span>

          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target={i.id}
            toggle={toggle}
          >
            Edit
          </Tooltip>
        </CardS>
      </ColS>
    );
  });

  return <>{size(feedbacks) ? <div>{cards}</div> : null}</>;
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
