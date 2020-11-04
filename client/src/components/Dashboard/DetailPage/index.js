import React, { useEffect } from "react";
import { connect } from "react-redux";
import { string } from "prop-types";
import axios from "axios";

const DetailPage = ({ teamId }) => {
  useEffect(() => {
    axios
      .get(
        `https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.roster`
      )
      .then((response) => {
        console.log(response.data.teams[0].roster);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>DetailPage</h1>
      <b>teamId</b>
      <p>{teamId}</p>
    </>
  );
};

DetailPage.propTypes = {
  teamId: string,
};

const mapDispatchToProps = (state) => ({
  teamId: state.choseTeamIdReducer.teams,
});

export default connect(mapDispatchToProps)(DetailPage);
