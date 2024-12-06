import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// GeoJSON for the US map
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";

const USMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  const dummyData = {
    "Alabama": "35%",
    "Alaska": "42%",
    "Arizona": "28%",
    "Arkansas": "31%",
    "California": "50%",
    "Colorado": "39%",
    "Connecticut": "44%",
    "Delaware": "37%",
    "Florida": "48%",
    "Georgia": "36%",
    "Hawaii": "45%",
    "Idaho": "29%",
    "Illinois": "41%",
    "Indiana": "32%",
    "Iowa": "30%",
    "Kansas": "33%",
    "Kentucky": "34%",
    "Louisiana": "38%",
    "Maine": "40%",
    "Maryland": "46%",
    "Massachusetts": "49%",
    "Michigan": "43%",
    "Minnesota": "35%",
    "Mississippi": "27%",
    "Missouri": "36%",
    "Montana": "26%",
    "Nebraska": "28%",
    "Nevada": "39%",
    "New Hampshire": "47%",
   "New Jersey": "51%",
    "New Mexico": "30%",
    "New York": "52%",
    "North Carolina": "37%",
    "North Dakota": "25%",
    "Ohio": "38%",
    "Oklahoma": "29%",
    "Oregon": "40%",
    "Pennsylvania": "42%",
    "Rhode Island": "45%",
    "South Carolina": "33%",
    "South Dakota": "27%",
    "Tennessee": "34%",
    "Texas": "50%",
    "Utah": "28%",
    "Vermont": "48%",
    "Virginia": "44%",
    "Washington": "49%",
    "West Virginia": "30%",
    "Wisconsin": "41%",
    "Wyoming": "26%",
  };

  // Create a color scale based on percentage
  const colorScale = scaleLinear()
    .domain([25, 52]) // Min and max percentage values
    .range(["#FFEDA0", "#F03B20"]); // Gradient from light yellow to red

  const handleMouseEnter = (geo) => {
    const { name } = geo.properties;
    setTooltipContent(`${name}: ${dummyData[name] || "N/A"}`);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        {tooltipContent || "Hover over a state"}
      </div>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{
          scale: 1000, // Increase the scale to make the map larger
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { name } = geo.properties;
              const percentage = parseFloat(dummyData[name]?.replace("%", "")) || 0;
              const fillColor = colorScale(percentage); // Get color based on percentage

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => handleMouseEnter(geo)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: {
                      fill: fillColor,
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMap;
