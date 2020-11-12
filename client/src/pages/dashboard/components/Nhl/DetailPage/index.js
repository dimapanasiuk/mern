import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Row, Card } from "reactstrap";
import { string } from "prop-types";
import axios from "axios";
import styled from "styled-components";
import Roster from "../Roster";

const CircleButton = styled(Button)`
  border-radius: 1000px;
`;

const RosterCard = styled(Card)`
  display: flex;
  padding: 20px;
`;

const DetailPage = ({ teamId }) => {
  const [roster, setRoster] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`
      )
      .then((response) => {
        setRoster(response.data.teams[0].roster.roster);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Link to="/dashboard">
        <CircleButton color="primary">🠔</CircleButton>
      </Link>
      <h1>DetailPage</h1>

      <RosterCard>
        <Row sm="12">
          <Roster roster={roster} />
        </Row>
      </RosterCard>
    </>
  );
};

DetailPage.propTypes = {
  teamId: string,
};

const mapDispatchToProps = (state) => ({
  teamId: state.choseTeamIdReducer.teams,
});

export default connect(mapDispatchToProps)(DetailPage);
