import React from "react";
import swal from "sweetalert";
import { map_redirect } from "../api";
import "./styles.css";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import features from "./features.json";

const MapChart = (props) => {
  const { setTooltipContent } = props;

  const HandleClick = (countryName) => {
    if (countryName !== null || countryName !== "") {
      window.open(map_redirect + "country=" + countryName, "_blank").focus();
    } else {
      swal("Oops!", "Something went wrong. Please try again", "error");
    }
  };

  return (
    <>
      <ComposableMap data-tip="">
        <ZoomableGroup>
          <Geographies geography={features}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  onClick={() => {
                    HandleClick(geo.properties.name);
                  }}
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
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
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
