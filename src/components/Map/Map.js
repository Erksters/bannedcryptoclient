import React, { useState } from "react";
import MapData from "./MapData.json";
import "./styles.css";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

const Map = (props) => {
  const params = new URLSearchParams(window.location.hash.substring(5));
  const countryName = params.get("country");
  const [content, setContent] = useState("");

  if (countryName === null) {
    return (
      <>
        <h2>Select a Country to learn more </h2>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>{countryName}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Legal:</td>
            <td>{MapData[countryName].Legal}</td>
          </tr>

          <tr>
            <td>Notes:</td>
            <td>{MapData[countryName].Notes}</td>
          </tr>
        </tbody>
      </table>
      <h2>Information on {countryName}</h2>

      <h3>Legal to trade:</h3>
    </>
  );
};

export default Map;
