import React from "react";
import FavoriteTeam from "../../components/Dashboard/FavoriteTeam";
import DashSettings from "../../components/Dashboard/Settings";
import DashShow from "../../components/Dashboard/Show";

const DashBoard = () => {
  const component = () => <FavoriteTeam />;

  return (
    <>
      <DashSettings child={[component]} />
      <DashShow />
    </>
  );
};

export default DashBoard;
