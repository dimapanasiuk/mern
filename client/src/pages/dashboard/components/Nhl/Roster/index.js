import React from "react";
import uuid from "react-uuid";
import { array } from "prop-types";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import styled from "styled-components";
import emoji from "emoji-dictionary";

const CardStyle = styled(Card)`
  margin-bottom: 20px;
`;

const Roster = ({ roster }) => {
  const ros = roster.map((item) => {
    return (
      <Col sm="3" key={uuid()}>
        <CardStyle body>
          <CardTitle tag="h5">
            {item.person.fullName}
            {` `} {emoji.getUnicode(":boy:")}
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </CardStyle>
      </Col>
    );
  });
  return <>{ros}</>;
};

Roster.propTypes = {
  roster: array,
};

export default Roster;
