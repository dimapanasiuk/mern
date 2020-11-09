import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import TeamCard from "../TeamCard";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await axios.get("/home");
      const user = await response.data;

      const { nhlTeams } = user.user;
      const t = nhlTeams.map((i) => i.id);

      const responseNhl = await axios.get(
        `http://statsapi.web.nhl.com/api/v1/teams/?teamId=${t}`
      );
      const teamsData = await responseNhl.data;
      setTeams(teamsData.teams);
    }

    fetchMyAPI();
  }, []);

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
      <Row xs="6" sm="12">
        {cards}
      </Row>
    </>
  );
};

export default connect()(Teams);
