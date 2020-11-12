import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Row, Card } from "reactstrap";
import { string } from "prop-types";
import axios from "axios";
import styled from "styled-components";

import Schedule from "../Schedule";
import TeamStats from "../TeamStats";
import Roster from "../Roster";
import DetailPageModal from "./DetailPageModal";

const CircleButton = styled(Button)`
  border-radius: 1000px;
`;

const StyleCard = styled(Card)`
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const DetailPage = ({ teamId }) => {
  const [roster, setRoster] = useState([]);

  const [modal, setModal] = useState(false);
  const [alertData, setAlertData] = useState("");

  const onShowModal = (id) => {
    if (!alertData) {
      axios
        .get(`https://statsapi.web.nhl.com/api/v1/people/${id}`)
        .then((res) => setAlertData(res.data.people[0]));
    } else {
      setAlertData("");
    }
    setModal(!modal);
  };

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
      <DivFlex>
        <Link to="/dashboard">
          <CircleButton color="primary">🠔</CircleButton>
        </Link>
        <h1 style={{ marginLeft: "20px" }}>DetailPage</h1>
      </DivFlex>

      <StyleCard>
        <Schedule teamId={teamId} />
      </StyleCard>

      <StyleCard>
        <TeamStats teamId={teamId} />
      </StyleCard>

      <StyleCard>
        <Row sm="12">
          <Roster roster={roster} onShowAlert={onShowModal} />
        </Row>

        <DetailPageModal
          alertData={alertData}
          StyleCard
          modal={modal}
          onShowModal={onShowModal}
        />
      </StyleCard>
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
