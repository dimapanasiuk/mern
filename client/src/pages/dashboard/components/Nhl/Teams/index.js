import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { string } from "prop-types";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import TeamCard from "../TeamCard";

const Teams = ({ id }) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log("user id", id);

    const fetchMyAPI = async () => {
      const response = await axios.get("/home");
      const user = await response.data;

      const { nhlTeams } = user.user;
      const t = nhlTeams.map((team) => team.id);

      const responseNhl = await axios.get(
        `http://statsapi.web.nhl.com/api/v1/teams/?teamId=${t}`
      );
      const teamsData = await responseNhl.data;
      setTeams(teamsData.teams);
    };

    fetchMyAPI();
  }, []);

  let cards;

  if (teams.length > 0) {
    cards = teams.map((team) => (
      <Col key={uuid()}>
        <TeamCard
          teamId={team.id}
          name={team.teamName}
          conf={team.conference.name}
          division={team.division.name}
        />
      </Col>
    ));
  }

  return (
    <>
      <h1 style={{ paddingBottom: "20px" }}>Teams</h1>
      <Row xs="6" sm="12">
        {cards}
      </Row>
    </>
  );
};

Teams.propTypes = {
  id: string,
};

const mapDispatchToProps = (state) => {
  return {
    id: state.enterCabinetReducer.userId,
  };
};

export default connect(mapDispatchToProps)(Teams);
