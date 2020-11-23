import React from "react";
import { size } from "lodash";
import { useGoogleMaps } from "react-hook-google-maps";
import { object } from "prop-types";

// eslint-disable-next-line import/no-unresolved
import theme from "style/theme";
// eslint-disable-next-line import/no-unresolved
import mapMarker from "content/img/map.svg";
// eslint-disable-next-line import/no-unresolved
import { UKRAINE } from "utils/constants";
import { Div } from "./style";

const FavoriteGoogleMap = ({ locationData }) => {
  const locationSize = size(Object.keys(locationData));

  const { ref, map, google } = useGoogleMaps(
    process.env.REACT_APP_MAP_API_KEY,
    {
      center: UKRAINE,
      zoom: 3,
      backgroundColor: theme.light_blue,
    }
  );

  if (map && locationSize) {
    const first = new google.maps.Marker({ position: locationData, map });
    first.setIcon(mapMarker);
    map.setZoom(6);
    map.setCenter(locationData);
  }

  return <Div ref={ref} />;
};

FavoriteGoogleMap.propTypes = {
  locationData: object,
};

export default FavoriteGoogleMap;
