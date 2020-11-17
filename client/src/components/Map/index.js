import React from "react";

import { useGoogleMaps } from "react-hook-google-maps";

const MyMap = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: properties for settings your map
    // https://developers.google.com/maps/documentation/javascript/reference
    {
      center: { lat: 0, lng: 0 },
      zoom: 1,
      backgroundColor: "red",
    }
  );

  console.log("map ", map);
  console.log("google ", google);

  return <div ref={ref} style={{ width: "auto", height: 300 }} />;
};

export default MyMap;
