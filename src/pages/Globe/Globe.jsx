import React from "react";
import { useState, useEffect } from "react";
import ReactGlobe from "react-globe";

function Globe() {
  const [markers, setMarkers] = useState([]);

  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ["Linear", "None"],
    markerTooltipRenderer: (marker) => `${marker.city} (${marker.value})`,
  };

  async function fetchCountries() {
    const response = await fetch(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort"
    );
    const countries = await response.json();
    var markers2 = [];
    for (var i = 0; i < 220; i++) {
      let color;
      if(countries[i].active > 1000000) {
        color = "#a50f15";
      }
      else if (countries[i].active > 500000) {
        color = "#fb6a4a";
      }
      else if (countries[i].active > 100000) {
        color = "#da8b6f";
      } 
      else if (countries[i].active > 50000) {
        color = "#fac5ad";
      }
      else {
        color = "rgb(158, 223, 253)a";
      }
      
      markers2.push({
        id: "marker" + i,
        city: countries[i].country,
        color: color,
        coordinates: [
          countries[i].countryInfo.lat,
          countries[i].countryInfo.long,
        ],
        value: countries[i].active,
      });
    }
    setMarkers(markers2);
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <ReactGlobe
      height="100vh"
      wid
      markers={markers}
      options={options}
    />
  );
}

export default Globe;
