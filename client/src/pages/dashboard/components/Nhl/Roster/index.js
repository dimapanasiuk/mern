import React from "react";
import uuid from "react-uuid";
import { array, func } from "prop-types";
import emoji from "emoji-dictionary";
import { CardTitle, Button, Col } from "reactstrap";

import theme from "style/theme";
import { DivFlex, Head, CardStyle, H4, H5 } from './style';

const Roster = ({ roster, onShowAlert }) => {
  const ros = roster.map((player) => {
    return (
      <Col sm="3" key={uuid()}>
        <CardStyle body>
          <CardTitle tag="h5">
            {player.person.fullName}
            &nbsp; {emoji.getUnicode(":boy:")}
          </CardTitle>
          <DivFlex>
            <h6>Number__</h6>
            <H4>{player.jerseyNumber}</H4>
          </DivFlex>
          <DivFlex>
            <h6>Position__</h6>
            <H5>{player.position.type}</H5>
          </DivFlex>
          <Button
            style={{ marginTop: "20px" }}
            id={player.person.id}
            color={theme.primary}
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
        <Head>Roster &nbsp; {emoji.getUnicode(":smirk_cat:")}</Head>
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
