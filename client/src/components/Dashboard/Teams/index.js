import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { string } from "prop-types";
import TeamCard from "../TeamCard";

const Teams = ({ ids }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (ids.length > 0) {
      axios
        .get(`http://statsapi.web.nhl.com/api/v1/teams/?teamId=${ids}`)
        .then((response) => {
          setTeams(response.data.teams);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ids]);

  let cards = <p>please choose favorite teams</p>;

  if (teams.length > 0) {
    cards = teams.map((i) => (
      <Col key={uuid()}>
        <TeamCard
          teamId={i.id}
          name={i.teamName}
          conf={i.conference.name}
          division={i.division.name}
        />
      </Col>
    ));
  }

  return (
    <>
      <h1 style={{ paddingBottom: "20px" }}>Teams</h1>
      <Row>{cards}</Row>
    </>
  );
};

Teams.propTypes = {
  ids: string,
};

const mapDispatchToProps = (state) => {
  const { teams } = state.choseTeamsReducer;
  const t = teams.map((i) => i.id).join();

  return {
    ids: t,
  };
};

export default connect(mapDispatchToProps)(Teams);
