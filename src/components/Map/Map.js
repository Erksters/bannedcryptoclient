import React, { useState } from "react";
import swal from "sweetalert";
import { map_redirect } from "../api";
import MapData from "./MapData.json";
import "./styles.css";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import features from "./features.json";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

const Map = (props) => {
  const params = new URLSearchParams(window.location.hash.substring(9));
  // const [countryName, setCountryName] = useState(params.get("country"));
  const [countryName, setCountryName] = useState("United States");
  const [content, setContent] = useState("");

  const HandleSubmit = () => {
    if (countryName !== null) {
      window.location.href = map_redirect + "country=" + countryName;
    } else {
      swal(
        "Oops!",
        "It looks like you didn't add a wallet address. Pleas try again",
        "error"
      );
    }
  };

  if (countryName === null) {
    return (
      <>
        <h2>Select a Country to learn more </h2>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </>
    );
  }

  console.log("countryName", countryName);
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
