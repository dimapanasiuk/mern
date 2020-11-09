import React from "react";
import uuid from "react-uuid";
import { array } from "prop-types";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import styled from "styled-components";

const Column = styled(Col)`
  padding: 0;
  margin: 0 10px 10px 0;
`;

const Roster = ({ roster }) => {
  const ros = roster.map((item) => {
    return (
      <Column sm="6" key={uuid()}>
        <Card body>
          <CardTitle tag="h5">{item.person.fullName}</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
        </Card>
      </Column>
    );
  });
  return <>{ros}</>;
};

Roster.propTypes = {
  roster: array,
};

export default Roster;
