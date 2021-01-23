import React from "react";
import { size } from "lodash";
import { useGoogleMaps } from "react-hook-google-maps";
import { array } from "prop-types";

import mapMarker from "content/img/map.svg";
import { UKRAINE } from "utils/constants";
import theme from "style/theme";
import { Div } from "./style";

const ShowMap = ({ locationData }) => {
  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_MAP_API_KEY,
    {
      center: UKRAINE,
      zoom: 3,
      backgroundColor: theme.light_blue,
    }
  );

  if (map && size(locationData)) {
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
