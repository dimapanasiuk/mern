import React from "react";
import Feedbacks from "./Feedbacks";
import ShowMap from "./ShowMap";

const MyMap = () => {
  const locationData = {};
  return (
    <>
      <Feedbacks />
      <ShowMap locationData={locationData} />
    </>
  );
};

export default MyMap;
