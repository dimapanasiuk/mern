import React, { useEffect, useState } from "react";
import { string } from "prop-types";
import axios from "axios";
import emoji from "emoji-dictionary";

const TeamStats = ({ teamId }) => {
  const [regSeason, setRegSeason] = useState("");
  const [postSeason, setPostRegSeason] = useState("");

  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats`)
      .then((data) => {
        setRegSeason(data.data.stats[0].splits);
        setPostRegSeason(data.data.stats[0].type.gameType.postseason);
      });
  }, []);

  console.log("regSeason", regSeason);

  const playoff = () => {
    if (!postSeason) {
      return <h1 className="display-4">Missed the playoff</h1>;
    }
    return <h1 className="display-4">Hit the playoff</h1>;
  };

  return (
    <>
      <h6>
        Team stats {` `} {emoji.getUnicode(":chart_with_upwards_trend:")}
      </h6>
      {playoff()}
    </>
  );
};

TeamStats.propTypes = {
  teamId: string,
};

export default TeamStats;
