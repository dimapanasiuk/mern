import React from "react";
import uuid from "react-uuid";
import { array, func } from "prop-types";
import { Card, CardTitle, Button, Col } from "reactstrap";
import styled from "styled-components";
import emoji from "emoji-dictionary";
import theme from "../../../../../style/theme";

const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;
const Head = styled.h6`
  margin-bottom: 20px;
`;

const CardStyle = styled(Card)`
  margin-bottom: 20px;
`;

const Roster = ({ roster, onShowAlert }) => {
  const ros = roster.map((player) => {
    return (
      <Col sm="3" key={uuid()}>
        <CardStyle body>
          <CardTitle tag="h5">
            {player.person.fullName}
            {` `} {emoji.getUnicode(":boy:")}
          </CardTitle>
          <DivFlex>
            <h6>Number__</h6>
            <h4 style={{ color: theme.red }}>{player.jerseyNumber}</h4>
          </DivFlex>
          <DivFlex>
            <h6>Position__</h6>
            <h5 style={{ color: theme.green }}>{player.position.type}</h5>
          </DivFlex>
          <Button
            style={{ marginTop: "20px" }}
            id={player.person.id}
            color="primary"
            onClick={(e) => {
              onShowAlert(e.target.id);
            }}
          >
            more
          </Button>
        </CardStyle>
      </Col>
    );
  });
  return (
    <>
      <Col sm="12">
        <Head>
          Roster {` `} {emoji.getUnicode(":smirk_cat:")}
        </Head>
      </Col>
      {ros}
    </>
  );
};

Roster.propTypes = {
  roster: array,
  onShowAlert: func,
};

export default Roster;
