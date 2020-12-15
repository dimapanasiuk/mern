import React from "react";

import { Column, DivFlex } from "./style";
import FavoriteCurrency from "../Bank/FavoriteCurrency";
import FavoriteTeams from "../Nhl/FavoriteTeams";
import FavoritePlaces from "../Map/FavoritePlaces";

const DashSettings = () => {
  return (
    <>
      <h1>test</h1>
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
    </>
  );
};


export default DashSettings;
