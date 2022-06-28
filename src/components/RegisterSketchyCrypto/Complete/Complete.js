import React from "react";
import Button from "react-bootstrap/Button";

const Complete = (props) => {
  const { setUserFlow, WalletAddress, Coin } = props;

  var delayInMilliseconds = 8000;

  setTimeout(function () {
    window.location.href =
      search_redirect + "wallet=" + WalletAddress + "&coin=" + Coin;
  }, delayInMilliseconds);

  const HandleSubmit = () => {
    setUserFlow(1);
    window.location.href = "/";
  };

  return (
    <div>
      <div className="centerDiv">
        <h3>You have Successfully submitted your data to our database!</h3>
      </div>
      <div className="centerDiv">
        <h4> Thank you for your help!</h4>
      </div>
      <div className="centerDiv">
        <h4>
          You will be redirected to the information page regarding that wallet
          in 8 seconds
        </h4>
      </div>

      <div className="centerDiv">
        <Button onClick={HandleSubmit}>Return Home</Button>
      </div>
    </div>
  );
};

export default Complete;
