import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "./Messages.css";
import PlaceBet from "../Bets/PlaceBet";

const Messages = ({ messages, name, bet }) => {

  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <PlaceBet message={message} name={name} bet={bet} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
};
export default Messages;
