import React from "react";
import { array } from "prop-types";
import { Button, Col } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import FavoriteCurrency from "../Bank/FavoriteCurrency";
import FavoriteTeams from "../Nhl/FavoriteTeams";

const Column = styled(Col)`
  padding: 0px 20px 0 0;
`;

const DashSettings = ({ saveTeams }) => {
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
      <div style={{ display: "flex" }}>
        <Column sm={6}>
          <FavoriteCurrency />
        </Column>
        <Column sm={6}>
          <FavoriteTeams />
        </Column>
      </div>
      <Button color="success" onClick={saveClickHandler}>
        Save Changes
      </Button>{" "}
    </>
  );
};

DashSettings.propTypes = {
  saveTeams: array,
};

const mapDispatchToProps = (state) => ({
  saveTeams: state.choseTeamsReducer.teams,
});

export default connect(mapDispatchToProps)(DashSettings);
