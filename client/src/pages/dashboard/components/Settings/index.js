import React from "react";
import { array } from "prop-types";
import { Button, Col } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

import FavoriteCurrency from "../Bank/FavoriteCurrency";
import FavoriteTeams from "../Nhl/FavoriteTeams";

const SaveButton = styled(Button)`
  margin-top: 20px;
`;

const Column = styled(Col)`
  padding: 0px 20px 0 0;
`;

const DivFlex = styled.div`
  display: flex;
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
      <DivFlex>
        <Column sm={6}>
          <FavoriteCurrency />
        </Column>
        <Column sm={6}>
          <FavoriteTeams />
        </Column>
      </DivFlex>
      <SaveButton color="success" onClick={saveClickHandler}>
        Save Changes
      </SaveButton>{" "}
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
