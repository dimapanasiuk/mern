import React from "react";
import FavoriteTeams from "../../components/Dashboard/FavoriteTeams";
import DashSettings from "../../components/Dashboard/Settings";
import DashShow from "../../components/Dashboard/Show";

const DashBoard = () => {
  const component = () => <FavoriteTeams />;

  return (
    <>
      <DashSettings child={[component]} />
      <DashShow />
    </>
  );
};

export default DashBoard;
