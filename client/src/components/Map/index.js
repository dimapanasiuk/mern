import React from "react";

import { useGoogleMaps } from "react-hook-google-maps";

import mapMarker from "content/img/map.svg";

// latitude - широта
// longitude - долгота

const uluru = { lat: -25.344, lng: 131.036 };

const MyMap = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    // NOTE: properties for settings your map
    // https://developers.google.com/maps/documentation/javascript/reference
    {
      center: uluru,
      zoom: 4,
      backgroundColor: "red",
    }
  );

  if (map) {
    // eslint-disable-next-line no-new
    const first = new google.maps.Marker({ position: uluru, map });
    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position: { lat: -24.344, lng: 130.036 },
      icon: {
        url:
          "http://mt.google.com/vt/icon?psize=27&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=50&text=•&scale=1",
      },
      map,
    });

    first.setIcon(mapMarker);
  }

  return <div ref={ref} style={{ width: "auto", height: 300 }} />;
};

export default MyMap;
