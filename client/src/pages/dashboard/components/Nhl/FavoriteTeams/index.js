import React, { useEffect, useState } from "react";
import axios from "axios";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { connect, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Head6 } from "../../Bank/FavoriteCurrency/style";
import { CardStyle } from "./style";
import choseTeams from "../../../../../store/choseTeams/actions";

let options = [];

const FavoriteTeams = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get("https://statsapi.web.nhl.com/api/v1/teams")
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (teams.length) {
    const res = teams.map((team) => ({
      value: team.name,
      label: team.name,
      id: team.id,
    }));
    options = res;
  }

  const choosesTeamsClickHandler = (a) => {
    dispatch(choseTeams(a));
  };

  return (
    <CardStyle body>
      <Head6>{t("Please choose your favorite teams")}</Head6>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={options}
        onChange={choosesTeamsClickHandler}
      />
    </CardStyle>
  );
};

export default connect()(FavoriteTeams);
