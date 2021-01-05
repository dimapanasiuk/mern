import React from "react";
import uuid from "react-uuid";
import { Row, Col, Alert } from "reactstrap";
import { array } from "prop-types";
import { size } from "lodash";
import { useTranslation } from "react-i18next";
import theme from "style/theme";
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
        <Alert color={theme.infoText}>
          {t("Please setting NHL")} {t("Widget")}
        </Alert>
      ) : (
          <Row sm="12">{cards}</Row>
        )}
    </>
  );
};

Teams.propTypes = {
  teams: array,
};

export default Teams;
