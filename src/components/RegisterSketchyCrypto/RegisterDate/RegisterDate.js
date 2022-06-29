import React from "react";
import Button from "react-bootstrap/Button";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const RegisterDate = (props) => {
  const { userFlow, setUserFlow, DateOfEvent, setDateOfEvent } = props;

  const HandleSubmit = () => {
    console.log("Submitting Coin");
    if (DateOfEvent.getTime() <= new Date().getTime()) {
      setUserFlow(userFlow + 1);
    }
  };

  return (
    <div>
      <div className="centerDiv">
        <h3>Tell us when this happened</h3>
      </div>
      <br />
      <div className="centerDiv">
        <DayPicker
          mode="single"
          selected={DateOfEvent}
          onSelect={setDateOfEvent}
        />
      </div>

      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default RegisterDate;
