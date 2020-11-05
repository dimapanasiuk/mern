import React from "react";
import { Card, CardTitle } from "reactstrap";
import { number, string } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import choseTeamId from "../../../../store/choseTeamId/actions";

const Content = styled.div`
  margin-bottom: 20px;
`;

const CardItem = styled(Card)`
  margin-bottom: 20px;
`;

const TeamCard = ({ teamId, name, conf, division }) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const { id } = e.target;
    dispatch(choseTeamId(id));
  };

  return (
    <CardItem body size="lg">
      <CardTitle tag="h3">{name}</CardTitle>
      <Content>
        <b>Conference</b>
        <p>{conf}</p>
        <b>Division</b>
        <p>{division}</p>
      </Content>
      <Link id={teamId} onClick={clickHandler} to={`/dashboard/${name}`}>
        More information
      </Link>
    </CardItem>
  );
};

TeamCard.propTypes = {
  teamId: number,
  name: string,
  conf: string,
  division: string,
};

export default connect()(TeamCard);
