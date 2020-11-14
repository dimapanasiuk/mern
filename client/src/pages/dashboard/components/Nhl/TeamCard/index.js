import React from "react";
import { Card, CardTitle } from "reactstrap";
import { number, string } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import emoji from "emoji-dictionary";

import { connect, useDispatch } from "react-redux";
import choseTeamId from "../../../../../store/choseTeamId/actions";

const CardItem = styled(Card)`
  margin-bottom: 20px;
`;

const TeamCard = ({ teamId, name }) => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const { id } = e.target;
    dispatch(choseTeamId(id));
  };

  return (
    <CardItem body size="lg">
      <CardTitle tag="h3">
        {name}
        &nbsp; {emoji.getUnicode("pouting_cat")}
      </CardTitle>
      <Link id={teamId} onClick={clickHandler} to={`/dashboard/${name}`}>
        More information
      </Link>
    </CardItem>
  );
};

TeamCard.propTypes = {
  teamId: number,
  name: string,
};

export default connect()(TeamCard);
