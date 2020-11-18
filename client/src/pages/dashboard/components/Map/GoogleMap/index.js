import React from "react";
import { size } from "lodash";
import { useGoogleMaps } from "react-hook-google-maps";
import { object } from "prop-types";

// eslint-disable-next-line import/no-unresolved
import mapMarker from "content/img/map.svg";

const uluru = { lat: 48.019573, lng: 66.923684 };

const GoogleMap = ({ locationData }) => {
  const locationSize = size(Object.keys(locationData));

  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBeEcwe9MrWGjT8epK_iCCyhAiql-Qvczw", // my key
    {
      center: uluru,
      zoom: 2,
      backgroundColor: "#d1ecf1",
    }
  );

  if (map && locationSize) {
    // eslint-disable-next-line no-new
    const first = new google.maps.Marker({ position: locationData, map });
    first.setIcon(mapMarker);
    map.setZoom(4);
    map.setCenter(locationData);
  }

  return <div ref={ref} style={{ width: "auto", height: 500 }} />;
};

GoogleMap.propTypes = {
  locationData: object,
};

export default GoogleMap;

// HELP
// "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk", spare key
