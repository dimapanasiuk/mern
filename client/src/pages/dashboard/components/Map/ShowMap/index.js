import React from "react";
import { size } from "lodash";
import { useGoogleMaps } from "react-hook-google-maps";
import { object } from "prop-types";

// eslint-disable-next-line import/no-unresolved
import mapMarker from "content/img/map.svg";
import { Div } from "./style";

const UKRAINE = { lat: 48.379433, lng: 31.16558 };

const ShowMap = ({ locationData }) => {
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyBeEcwe9MrWGjT8epK_iCCyhAiql-Qvczw", // my key
    {
      center: UKRAINE,
      zoom: 3,
      backgroundColor: "#d1ecf1",
    }
  );

  if (map && size(locationData)) {
    // eslint-disable-next-line no-new
    const first = new google.maps.Marker({ position: locationData, map });
    first.setIcon(mapMarker);
    map.setZoom(6);
    map.setCenter(locationData);
  }

  return <Div ref={ref} />;
};

ShowMap.propTypes = {
  locationData: object,
};

export default ShowMap;
