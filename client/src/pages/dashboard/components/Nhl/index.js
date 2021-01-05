import React from "react";
import { object } from "prop-types";

import Teams from "./Teams/index";

const Nhl = ({ teams }) => {
  return (<Teams teams={teams.teams} />);
};

Nhl.propTypes = {
  teams: object
};

export default Nhl;
