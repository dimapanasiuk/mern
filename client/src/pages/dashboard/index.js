import React from "react";
import FavoriteTeams from "./components/Nhl/FavoriteTeams";
import DashSettings from "./components/Settings";
import Show from "./components/Show";

const DashBoard = () => {
  const component = () => <FavoriteTeams />;

  return (
    <>
      <DashSettings child={[component]} />
      <Show />
    </>
  );
};

export default DashBoard;
