import React, { useEffect, useState } from "react";
import { string } from "prop-types";
import axios from "axios";
import emoji from "emoji-dictionary";
import styled from "styled-components";
import theme from "../../../../../style/theme";

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Head4 = styled.h4`
  width: 100%;
  margin-left: 40px;
`;

const TeamStats = ({ teamId }) => {
  const [regSeason, setRegSeason] = useState("");
  const [postSeason, setPostRegSeason] = useState("");

  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats`)
      .then((data) => {
        setRegSeason(data.data.stats[0].splits[0].stat);
        setPostRegSeason(data.data.stats[0].type.gameType.postseason);
      });
  }, []);

  console.log("regSeason", regSeason);

  const playoff = () => {
    if (!postSeason) {
      return <Head4 className="display-4">Missed the playoff</Head4>;
    }
    return <Head4 className="display-4">Hit the playoff</Head4>;
  };

  return (
    <>
      <h6>
        Team stats {` `} {emoji.getUnicode(":chart_with_upwards_trend:")}
      </h6>
      <DivFlex>
        <div>
          <DivFlex>
            <h3>Wins</h3>
            <h3 style={{ color: theme.green }}> {regSeason.wins}</h3>
          </DivFlex>
          <DivFlex>
            <h3>Losses</h3>
            <h3 style={{ color: theme.red }}>{regSeason.losses}</h3>
          </DivFlex>
          <DivFlex>
            <h3>Goals</h3>
            <h3 style={{ color: theme.blue }}> {regSeason.goalsPerGame}</h3>
          </DivFlex>
          <DivFlex>
            <h3>Penalty</h3>
            <h3 style={{ color: theme.info }}>
              {regSeason.penaltyKillPercentage}
            </h3>
          </DivFlex>
          <DivFlex>
            <h3>Points</h3>
            <h3 style={{ color: theme.gray }}> {regSeason.pts}</h3>
          </DivFlex>
        </div>
        {playoff()}
      </DivFlex>
    </>
  );
};

TeamStats.propTypes = {
  teamId: string,
};

export default TeamStats;
