import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { DayPicker } from 'react-day-picker';
import { format, setDate } from 'date-fns';
import 'react-day-picker/dist/style.css';


const RegisterDate = (props) => {
  const { userFlow, setUserFlow, DateOfEvent, setDateOfEvent } = props;

  const HandleSubmit = () => {
    console.log("Submitting Coin");
    if (DateOfEvent.getTime() <= new Date().getTime()) {
      setUserFlow(userFlow + 1);
    }
  };



  return (
    <>
    <div>
    <h3>Tell us when this happened</h3>
    </div>
      <br/>
      <div>
      <DayPicker
      mode="single"
      selected={DateOfEvent}
      onSelect={setDateOfEvent}
    />      </div>
    


<div>
<Button onClick={HandleSubmit}>Next</Button>

</div>

        




  
    </>
  );
};

export default RegisterDate;
