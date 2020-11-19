import React from "react";
import { array } from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { SaveButton, Column, DivFlex } from "./style";
import FavoriteCurrency from "../Bank/FavoriteCurrency";
import FavoriteTeams from "../Nhl/FavoriteTeams";
import FavoritePlaces from "../Map/FavoritePlaces";

const DashSettings = ({ saveTeams }) => {
  const { t } = useTranslation();

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
      <Column sm={12}>
        <FavoritePlaces />
      </Column>
      <SaveButton color="success" onClick={saveClickHandler}>
        {t("Save")}
      </SaveButton>
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
