import React, { useEffect, useState } from "react";
import { string } from "prop-types";
import axios from "axios";
import emoji from "emoji-dictionary";
import { size } from "lodash";

const Schedule = ({ teamId }) => {
  const [dates, setDates] = useState("");
  useEffect(() => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}`)
      .then((data) => setDates(data.data.dates));
  }, []);

  const result = () => {
    if (!size(dates)) {
      return <h1 className="display-4">Season is over</h1>;
    }
    return <h1 className="display-4">Please update information on frontend</h1>;
  };

  return (
    <>
      <h6>
        Schedule {` `} {emoji.getUnicode(":calendar:")}
      </h6>

      {result()}
    </>
  );
};

Schedule.propTypes = {
  teamId: string,
};

export default Schedule;
