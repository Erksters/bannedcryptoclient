import React from "react";
import swal from "sweetalert";
import { map_redirect } from "../api";
import MapData from "./Map.json";

const Results = (props) => {
    const params = new URLSearchParams(window.location.hash.substring(9));
    const [countryName, setCountryName] = useState(params.get("country"));


    const HandleSubmit = () => {
        if ( countryName !== null ) {
          window.location.href =
            map_redirect + "country=" + countryName;
        } else {
          swal(
            "Oops!",
            "It looks like you didn't add a wallet address. Pleas try again",
            "error"
          );
        }
      };

    if(countryName === null){
        return (
            <>
              <table>
                <tr>
                  <th>ID #</th>
                  <th>Notes</th>
                  <th>Date</th>
                </tr>
        
                <tbody>
                  {Complaints.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.ID}</td>
                      <td>{entry.Notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          );      
    }

  return (
    <>
      <table>
        <tr>
          <th>ID #</th>
          <th>Notes</th>
          <th>Date</th>
        </tr>

        <tbody>
          {Complaints.map((entry, index) => (
            <tr key={index}>
              <td>{entry.ID}</td>
              <td>{entry.Notes}</td>
              <td>
                {new Date().toLocaleString("en", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Results;
