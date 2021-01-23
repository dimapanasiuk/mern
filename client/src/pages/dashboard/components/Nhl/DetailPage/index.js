import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { string } from "prop-types";
import axios from "axios";

import theme from "style/theme";
import { ContainerDiv, CircleButton, StyleCard, DivFlex, Head1 } from "./style";
import Schedule from "../Schedule";
import TeamStats from "../TeamStats";
import Roster from "../Roster";
import DetailPageModal from "./DetailPageModal";

const DetailPage = ({ teamId }) => {
  const [teamName, setTeamName] = useState("");
  const [roster, setRoster] = useState([]);
  const [modal, setModal] = useState(false);
  const [alertData, setAlertData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`
      )
      .then((res) => {
        const data = res.data.teams[0];
        if (data) setRoster(data.roster.roster);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}`)
      .then((res) => {
        const data = res.data.teams[0];
        if (data) setTeamName(data.name);
      });
  }, []);

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

  return (
    <ContainerDiv>
      <DivFlex>
        <Link to="/dashboard">
          <CircleButton color={theme.primary}>🠔</CircleButton>
        </Link>
        <Head1>{teamName}</Head1>
      </DivFlex>
      <StyleCard>
        <Schedule teamId={teamId} />
      </StyleCard>
      <StyleCard>
        <TeamStats teamId={teamId} />
      </StyleCard>
      <br />
      <StyleCard sm="12" >
        <Row sm="12" >
          <Roster roster={roster} onShowAlert={onShowModal} />
        </Row>
        <DetailPageModal
          alertData={alertData}
          StyleCardS
          modal={modal}
          onShowModal={onShowModal}
        />
      </StyleCard>
    </ContainerDiv>
  );
};

DetailPage.propTypes = {
  teamId: string,
};

const mapDispatchToProps = (state) => ({
  teamId: state.choseTeamIdReducer.id,
});

export default connect(mapDispatchToProps)(DetailPage);
