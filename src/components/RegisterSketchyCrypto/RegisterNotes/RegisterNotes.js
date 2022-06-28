import React from "react";
import Button from "react-bootstrap/Button";

import TextField from "@mui/material/TextField";

const RegisterNotes = (props) => {
  const { userFlow, setUserFlow, Notes, setNotes } = props;

  const HandleSubmit = () => {
    console.log("Submitting Notes");
    if (Notes !== "" && Notes.length < 1000) {
      setUserFlow(userFlow + 1);
    }
  };

  return (
    <div>
      <div className="centerDiv">
        <h3>Give us some notes for future users</h3>
      </div>
      <div className="centerDiv">
        <TextField
          id="outlined-multiline-static"
          label="Enter details below"
          multiline
          rows={4}
          placeholder="Write a bit of info..."
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        />
      </div>

      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Next</Button>
      </div>
    </div>
  );
};

export default RegisterNotes;
