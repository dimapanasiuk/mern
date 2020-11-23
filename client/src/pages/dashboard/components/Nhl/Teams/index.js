import React from "react";
import uuid from "react-uuid";
import { Row, Col, Alert } from "reactstrap";
import { connect } from "react-redux";
import { any } from "prop-types";
import { size } from "lodash";
import { useTranslation } from "react-i18next";

import TeamCard from "../TeamCard";

const Teams = ({ teams }) => {
  const { t } = useTranslation();

  let cards;

  if (size(teams)) {
    cards = teams.map((team) => (
      <Col key={uuid()} sm={6}>
        <TeamCard teamId={team.id} name={team.value} />
      </Col>
    ));
  }

  return (
    <>
      {!size(teams) ? (
        <Alert color="info">
          {t("Please setting NHL")} {t("Widget")}
        </Alert>
      ) : (
        <Row sm="12">{cards}</Row>
      )}
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
