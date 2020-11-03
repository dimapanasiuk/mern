import React from "react";
import { any } from "prop-types";

const DashSettings = ({ child }) => {
  return (
    <>
      {child[0]()}
      <h1>DashSettings</h1>
    </>
  );
};

DashSettings.propTypes = {
  child: any, // eslint-disable-line 
};

export default DashSettings;
