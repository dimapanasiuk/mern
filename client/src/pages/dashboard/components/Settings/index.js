import React from "react";
import { any, array } from "prop-types";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";

const DashSettings = ({ child, saveTeams }) => {
  const saveClickHandler = async () => {
    axios
      .put("/save", { teams: saveTeams })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>DashSettings</h1>
      {child[0]()}
      <Button color="success" onClick={saveClickHandler}>
        Save Changes
      </Button>{" "}
    </>
  );
};

DashSettings.propTypes = {
  child: any,
  saveTeams: array,
};

const mapDispatchToProps = (state) => {
  console.log("Teams component", state.choseTeamsReducer.teams);
  return { saveTeams: state.choseTeamsReducer.teams };
};

export default connect(mapDispatchToProps)(DashSettings);
