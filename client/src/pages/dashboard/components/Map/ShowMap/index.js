import React from "react";
import { size } from "lodash";
import { useGoogleMaps } from "react-hook-google-maps";
import { array } from "prop-types";

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
    locationData.forEach((item) => {
      new google.maps.Marker({ position: item.location, map }).setIcon(
        mapMarker
      );
      map.setZoom(2);
    });
  }

  return <Div ref={ref} />;
};

ShowMap.propTypes = {
  locationData: array,
};

export default ShowMap;
