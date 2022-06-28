import React, { useEffect, useState } from "react";
import {  show_recent_100 } from "../api"; 
const Home = () => {
  const [showRecent100, setShowRecent100] = useState();

  useEffect(() => {
    fetch( show_recent_100)
      .then((response) => response.json())
      .then((data) => {
        setShowRecent100(data);
      });
  }, []);

  if (showRecent100 === undefined) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className="centerDiv">
        <h2>Find Sketchy Wallets and more!</h2>
      </div>
      <div>
        <div className="centerDiv">
          <h3>Our most recent Registered Wallets</h3>
        </div>
        <div className="centerDiv">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th>Coin</th>
              </tr>
            </thead>

            <tbody>
              {showRecent100.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.ID}</td>
                  <td>{entry.address}</td>
                  <td>{entry.Coin_Symb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
