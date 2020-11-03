import React from "react";
import FavoriteTeam from "../../components/Dashboard/FavoriteTeam";
import DashSettings from "../../components/Dashboard/Settings";

const DashBoard = () => {
  const component = () => <FavoriteTeam />;

  return (
    <>
      <DashSettings child={[component]} />
      <FavoriteTeam />
    </>
  );
};

export default DashBoard;
