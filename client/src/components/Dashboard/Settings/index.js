import React from "react";
import { any } from "prop-types";

const DashSettings = ({ child }) => {
  return (
    <>
      <h1>DashSettings</h1>
      {child[0]()}
    </>
  );
};

DashSettings.propTypes = {
  child: any, // eslint-disable-line
};

export default DashSettings;
