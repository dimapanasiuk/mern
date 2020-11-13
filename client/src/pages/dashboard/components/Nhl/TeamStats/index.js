import React, { useEffect, useState } from "react";
import { string } from "prop-types";
import axios from "axios";
import emoji from "emoji-dictionary";
import {
  HeadGreen,
  HeadRed,
  HeadBlue,
  HeadInfo,
  HeadGray,
  DivFlex,
  Head4,
} from "./style";

const TeamStats = ({ teamId }) => {
  const [regSeason, setRegSeason] = useState("");
  const [postSeason, setPostRegSeason] = useState("");

  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}/stats`)
      .then((data) => {
        if (data.data.stats[0]) {
          setRegSeason(data.data.stats[0].splits[0].stat);
          setPostRegSeason(data.data.stats[0].type.gameType.postseason);
        }
      });
  }, []);

  const playoff = () => {
    if (!postSeason) {
      return <Head4 className="display-4">Missed the playoff</Head4>;
    }
    return <Head4 className="display-4">Hit the playoff</Head4>;
  };

  return (
    <>
      <h6>
        Team stats &nbsp; {emoji.getUnicode(":chart_with_upwards_trend:")}
      </h6>
      <DivFlex>
        <div>
          <DivFlex>
            <h3>Wins</h3>
            <HeadGreen> {regSeason.wins}</HeadGreen>
          </DivFlex>
          <DivFlex>
            <h3>Losses</h3>
            <HeadRed>{regSeason.losses}</HeadRed>
          </DivFlex>
          <DivFlex>
            <h3>Goals</h3>
            <HeadBlue> {regSeason.goalsPerGame}</HeadBlue>
          </DivFlex>
          <DivFlex>
            <h3>Penalty</h3>
            <HeadInfo>{regSeason.penaltyKillPercentage}</HeadInfo>
          </DivFlex>
          <DivFlex>
            <h3>Points</h3>
            <HeadGray> {regSeason.pts}</HeadGray>
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
