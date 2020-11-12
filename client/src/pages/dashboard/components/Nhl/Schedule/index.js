import React from "react";
import { string } from "prop-types";

const Schedule = ({ teamId }) => {
  return (
    <>
      <h1>{teamId}</h1>
      <h1>Schedule</h1>
    </>
  );
};

Schedule.propTypes = {
  teamId: string,
};

export default Schedule;
