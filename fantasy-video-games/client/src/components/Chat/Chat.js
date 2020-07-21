import React, { useEffect, useState } from 'react';
import queryString from "query-string";
import io from 'socket.io-client';
import "./Chat.css"
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const EndPoint = "localhost:3003";
    
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(EndPoint)

        setName(name);
        setRoom(room)
       
        socket.emit('join', { name, room }, () => {

        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [EndPoint, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(messages =>[...messages,message])
        })
    }, []);

    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);
    return(
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;