import React, { useState, memo } from "react";
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
import ReactTooltip from "react-tooltip";

const MapChart = (props) => {
  const { setTooltipContent } = props;
  const params = new URLSearchParams(window.location.hash.substring(9));

  const HandleClick = (countryName) => {
    if (countryName !== null || countryName !== "") {
      window.location.href = map_redirect + "country=" + countryName;
    } else {
      swal(
        "Oops!",
        "It looks like you didn't add a wallet address. Pleas try again",
        "error"
      );
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
