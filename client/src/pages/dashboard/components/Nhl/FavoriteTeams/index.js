import React, { useEffect, useState } from "react";
import axios from "axios";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { connect, useDispatch } from "react-redux";

import { Card, CardTitle } from "reactstrap";

import choseTeams from "../../../../../store/choseTeams/actions";

let options = [];

const FavoriteTeams = () => {
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

  const choosesItems = (a) => {
    dispatch(choseTeams(a));
  };

  return (
    <Card body>
      <CardTitle>Please choose your favorite teams</CardTitle>
      <Select
        closeMenuOnSelect={false}
        components={makeAnimated()}
        isMulti
        options={options}
        onChange={choosesItems}
      />
    </Card>
  );
};

export default connect()(FavoriteTeams);
