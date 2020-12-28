import React, { useState } from "react";
import { array } from "prop-types";
import { CardText, Col } from "reactstrap";
import { size } from "lodash";
import emoji from "emoji-dictionary";
import uuid from "react-uuid";

import ModalsEdit from "./ModalsEdit";
import { CardS, ButtonS, RowS, CardTitleS } from "./style";

const Feedbacks = ({ feedbacks }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const foo = (e) => {
    const {num} = e.target.dataset;
    console.log('feedbacks[num]', feedbacks[num]) ;
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
          <ModalsEdit // TODO fix modals
            isOpen={modal}
            toggle={toggle}
            placeId={item.id}
            place={item.label}
            desc={item.desc}
          />
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
