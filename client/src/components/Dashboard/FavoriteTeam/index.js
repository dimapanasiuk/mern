import React, { useEffect, useState } from "react";
import axios from "axios";
import makeAnimated from "react-select/animated";
import Select from "react-select";

import { Card, CardTitle } from "reactstrap";

import styled from "styled-components";

const Multiselect = styled(Select)`
  max-width: 50%;
`;

const DashCard = styled(Card)`
  margin: 20px;
`;

let options = [];

const FavoriteTeam = () => {
  const [choosesTeams, setChoosesTeams] = useState([]);
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
    const res = teams.map((i) => ({ value: i.name, label: i.name, id: i.id }));
    options = res;
  }

  const choosesItems = (a) => {
    setChoosesTeams(a);
  };

  console.log(teams);
  console.log(choosesTeams);

  return (
    <>
      <DashCard body>
        <CardTitle>Please choose your favorite teams</CardTitle>
        <Multiselect
          closeMenuOnSelect={false}
          components={makeAnimated()}
          isMulti
          options={options}
          onChange={choosesItems}
        />
      </DashCard>
    </>
  );
};

export default FavoriteTeam;
