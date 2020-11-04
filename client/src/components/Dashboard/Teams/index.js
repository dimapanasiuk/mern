import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Row, Col } from "reactstrap";
import TeamCard from "../TeamCard";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://statsapi.web.nhl.com/api/v1/teams/?teamId=4,5,29,2")
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let cards = "Loading ...";

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

export default Teams;
