import React, { useEffect } from 'react';
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message"
import "./Messages.css";

const Messages = ({ messages, name }) => {
    console.log("messages are", messages, typeof messages )
    if(typeof messages == 'number'){
        return <div></div>
    }

    

    // useEffect =()=> {

    // }


    
    return (
        <ScrollToBottom className="messages">
            {
                messages.map((message, i) => {
                    console.log('messages is', message)
                    return <div key={i}>
                        <Message message={message} name={name}/>
                        
                        </div>
                })
            }
        </ScrollToBottom>
    )
    
}
export default Messages;