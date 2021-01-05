import React from "react";
import { CardTitle } from "reactstrap";
import { number, string } from "prop-types";
import { Link } from "react-router-dom";
import emoji from "emoji-dictionary";

import { CardItem } from "./style"

const TeamCard = ({ teamId, name }) => {
  return (
    <CardItem body size="lg">
      <CardTitle tag="h3">
        {name}
        &nbsp; {emoji.getUnicode("pouting_cat")}
      </CardTitle>
      <Link id={teamId} to={`/dashboard/${name}`}>
        More information
      </Link>
    </CardItem>
  );
};

TeamCard.propTypes = {
  teamId: number,
  name: string,
};

export default TeamCard;
