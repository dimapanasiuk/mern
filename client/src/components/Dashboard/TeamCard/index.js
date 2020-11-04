import React from "react";
import { Card, Button, CardTitle } from "reactstrap";
import { string } from "prop-types";
import styled from "styled-components";

const Content = styled.div`
  margin-bottom: 20px;
`;

const TeamCard = ({ name, conf, division }) => {
  return (
    <Card body>
      <CardTitle tag="h3">{name}</CardTitle>
      <Content>
        <b>Conference</b>
        <p>{conf}</p>
        <b>Division</b>
        <p>{division}</p>
      </Content>
      <Button color="primary">More information</Button>
    </Card>
  );
};

TeamCard.propTypes = {
  name: string,
  conf: string,
  division: string,
};

export default TeamCard;
