import React from "react";
import uuid from "react-uuid";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { any } from "prop-types";
import TeamCard from "../TeamCard";

const Teams = ({ teams }) => {
  let cards;

  if (teams.length > 0) {
    cards = teams.map((team) => (
      <Col key={uuid()} sm={6}>
        <TeamCard teamId={team.id} name={team.value} />
      </Col>
    ));
  }

  return (
    <>
      <h2>Please setting Nhl widget</h2>
      <Row sm="12">{cards}</Row>
    </>
  );
};

Teams.propTypes = {
  teams: any,
};

const mapDispatchToProps = (state) => {
  return {
    teams: state.choseTeamsReducer.teams,
  };
};

export default connect(mapDispatchToProps)(Teams);
