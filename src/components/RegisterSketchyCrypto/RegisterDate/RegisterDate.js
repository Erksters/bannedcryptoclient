import React from "react";
import Button from 'react-bootstrap/Button';

import DatePicker from "react-datepicker";

const RegisterDate = (props) => {
  const { userFlow, setUserFlow, DateOfEvent, setDateOfEvent } = props;

  const HandleSubmit = () => {
    console.log("Submitting Coin");
    if (DateOfEvent.getTime() <= new Date().getTime()) {
      setUserFlow(userFlow + 1);
    }
  };

  console.log(userFlow);

  return (
    <>
      <h3>Tell us when this happened</h3>




        <DatePicker locale="es" selected={DateOfEvent} onChange={(date) => setDateOfEvent(date)} />




      <Button onClick={HandleSubmit}>Next</Button>
    </>
  );
};

export default RegisterDate;
