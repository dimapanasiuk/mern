import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "../TeamCard";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("http://statsapi.web.nhl.com/api/v1/teams/?teamId=4,5,29")
      .then((response) => {
        setTeams(response.data.teams);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let cards = "Loading ...";

  if (teams.length > 0) {
    cards = teams.map((i) => <h1>{i.name}</h1>);
  }

  return (
    <>
      <TeamCard />
      {cards}
      <h1>Teams</h1>
    </>
  );
};

export default Teams;
