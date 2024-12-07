import React, { useState, MouseEvent } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographiesProps,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// GeoJSON for the US map
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas/states-10m.json";

// Define the type for the data structure
interface Data {
  [key: string]: string;
}

// Define the initial data
const dummyData = {
  Alabama: "35%",
  Alaska: "42%",
  Arizona: "28%",
  Arkansas: "31%",
  California: "50%",
  Colorado: "39%",
  Connecticut: "44%",
  Delaware: "37%",
  Florida: "48%",
  Georgia: "36%",
  Hawaii: "45%",
  Idaho: "29%",
  Illinois: "41%",
  Indiana: "32%",
  Iowa: "30%",
  Kansas: "33%",
  Kentucky: "34%",
  Louisiana: "38%",
  Maine: "40%",
  Maryland: "46%",
  Massachusetts: "49%",
  Michigan: "43%",
  Minnesota: "35%",
  Mississippi: "27%",
  Missouri: "36%",
  Montana: "26%",
  Nebraska: "28%",
  Nevada: "39%",
  "New Hampshire": "47%",
  "New Jersey": "51%",
  "New Mexico": "30%",
  "New York": "52%",
  "North Carolina": "37%",
  "North Dakota": "25%",
  Ohio: "38%",
  Oklahoma: "29%",
  Oregon: "40%",
  Pennsylvania: "42%",
  "Rhode Island": "45%",
  "South Carolina": "33%",
  "South Dakota": "27%",
  Tennessee: "34%",
  Texas: "50%",
  Utah: "28%",
  Vermont: "48%",
  Virginia: "44%",
  Washington: "49%",
  "West Virginia": "30%",
  Wisconsin: "41%",
  Wyoming: "26%",
};
const colorScale = scaleLinear<string, string>()
  .domain([25, 52])
  .range(["#36ad75", "#05542f"]);

const USMap: React.FC = () => {
  const [tooltipData, setTooltipData] = useState<string | null>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  const handleMouseEnter = (geo: any, event: MouseEvent<SVGPathElement>) => {
    const { name }: { name: keyof typeof dummyData } = geo.properties;
    const percentage = dummyData[name] || "N/A";
    setTooltipData(`${name}: ${percentage}`);
    setTooltipStyle({
      display: "block",
      top: event.clientY + 10,
      left: event.clientX + 10,
    });
  };

  const handleMouseMove = (event: MouseEvent<SVGPathElement>) => {
    setTooltipStyle((prevStyle) => ({
      ...prevStyle,
      top: event.clientY - 60,
      left: event.clientX - 60,
    }));
  };

  const handleMouseLeave = () => {
    setTooltipData(null);
    setTooltipStyle({ display: "none" });
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "600px" }}>
      {tooltipData && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "12px",
            pointerEvents: "none",
            zIndex: 10,
            transition: "top 0.1s, left 0.1s", // Smooth movement
            ...tooltipStyle,
          }}
        >
          {tooltipData}
        </div>
      )}
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {(data) =>
            data.geographies.map((geo) => {
              const { name }: { name: keyof typeof dummyData } = geo.properties;
              const percentage =
                parseFloat(dummyData[name]?.replace("%", "")) || 0;
              const fillColor = colorScale(percentage);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: {
                      fill: fillColor,
                      outline: "none",
                      cursor: "pointer", // Pointer cursor
                    },
                    hover: {
                      fill: "#0a3d25",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#0a3d25",
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
