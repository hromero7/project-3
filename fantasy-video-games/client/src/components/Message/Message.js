import React from 'react';

import "./Message.css";

const Message = ({ message: { text,user,balance  }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name;

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{text}</p>
                    <p className="messageText colorWhite">${balance}</p>

                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{text}</p>
                    <p className="messageText colorDark">${balance}</p>

                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
}

export default Message;