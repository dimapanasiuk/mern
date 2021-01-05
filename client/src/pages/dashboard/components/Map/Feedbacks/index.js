import React, { useState } from "react";
import { array } from "prop-types";
import { CardText, Col } from "reactstrap";
import { size } from "lodash";
import emoji from "emoji-dictionary";
import uuid from "react-uuid";

import ModalsEdit from "./ModalsEdit";
import { CardS, ButtonS, RowS, CardTitleS } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const [idMap, setIdMap] = useState("");
  const [labelMap, setLabelMap] = useState("");
  const [descriptionMap, setDescriptionMap] = useState("");

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const foo = (e) => {
    const { num } = e.target.dataset;
    const data = feedbacks[num];

    setIdMap(data.id);
    setLabelMap(data.label);
    setDescriptionMap(data.desc);
  }

  const clickHandlerForEdit = (e) => {
    foo(e);
    toggle();
  }

  const cards = feedbacks.map((item, i) => {
    return (
      <Col key={uuid()} sm={4}>
        <CardS>
          <CardTitleS>
            <h5>
              {emoji.getUnicode(":round_pushpin:")}
              &nbsp;{item.label}
            </h5>
            &nbsp;
            <ButtonS outline title="edit" onClick={clickHandlerForEdit} data-num={i}>
              {emoji.getUnicode(":pencil2:")}
            </ButtonS>
          </CardTitleS>
          <CardText>{item.desc}</CardText>
        </CardS>
      </Col>
    );
  });

  return (<>
    {size(feedbacks) ? <RowS>{cards}</RowS> : null}
    <ModalsEdit
      isOpen={modal}
      toggle={toggle}
      placeId={idMap}
      place={labelMap}
      desc={descriptionMap}
    />
  </>);
};

Feedbacks.propTypes = {
  feedbacks: array,
};

export default Feedbacks;
