import React, { useState } from "react";
import { updateUserBalance } from "../../utils/API";
import Message from "../Message/Message";

export default function PlaceBet({ message, name, bet}) {
  const [betting, setBetting] = useState();
  const [betInput, setBetInput] = useState();

  const handleBetToggle = () => {
    if (betting) {
      updateUserBalance(bet, +betInput);
    }

    setBetting(!betting)

   
  };

  return (
    <div>
      <div>
        <Message message={message} name={name} />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleBetToggle}
          style={{
            marginTop: "-4.5vw",
            marginRight: "7vw",
          }}
        >
          {!betting ? "+" : "Send Bet"}
        </button>
        {betting ? (
          <input
            value={betInput}
            onChange={(e) => setBetInput(e.target.value)}
            type="number"
            placeholder="$0"
            style={{
              position: "relative",
              width: "40%",
              marginLeft: "100px",
              marginTop: "-10px",
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
