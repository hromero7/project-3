import React, { useEffect, useState } from 'react';
import queryString from "query-string";

import "./Chat.css"
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';






class Chat extends React.Component  {

    constructor(props){
      
        super(props)
        this.state = {
            message : "",
            messages : [],
            balance: 100000,
            user : JSON.parse(localStorage.getItem('user')),
            // bet: JSON.parse(localStorage)
        }
        console.log("beginning state is", this.state)

       
        this.sendMessage = this.sendMessage.bind(this)
        this.setMessage = this.setMessage.bind(this)
        this.setMessageList = this.setMessageList.bind(this)
    }

    componentDidMount(){
        if(this.state) {
       
             window.socket.emit('join', { name : this.state.user.username, room : 'cod', balance: this.state.balance})

            // 
            window.socket.on('message', (message) => {
                console.log("type of messasge is", typeof message)
                console.log("message recieved (client)", message)
                this.setMessageList(message)
            })

            
        } else {
            console.log("cannot join user")
        }

    }

    //function for sending messages
    sendMessage = (event) => {
        event.preventDefault();
        console.log("message is being sent", this.state.message)

        if(this.state.message) {
            window.socket.emit('sendMessage', {message : this.state.message });
        } else {
            console.log("no message to send")
        }
    }

    setMessageList(message){
        console.log("about to append message", message)
    
        if(this.state.messages.length == 0){
            let m = {
                user : message.user, 
                text : message.text.message,
                balance: this.state.balance
            }
            let mList = []
            mList.push(m)
            this.setState({
                messages : mList
            })
        } else {

            let m = {
                user : message.user, 
                text : message.text.message,
                balance: this.state.balance
            }
      
            let mList =  []
            for(let i = 0; i < this.state.messages.length; i++){
                mList.push(this.state.messages[i])
            }
            mList.push(m)
            this.setState({
                messages : mList
            })
            console.log("message list after appending", this.state.messages)
        }
  
       this.setMessage("")
    }

    // sets the message to send to server through ws
    setMessage(message){
        console.log("gg")
        this.setState({
            message : message
        })
    }

     handleBet(balance) {
        // newBalance= parseInt(this.state.balance)-100
        // console.log(newBalance)
        this.setState({balance: this.state.balance-100})
    }

    render(){

      
        console.log("rendering")
        return(
            <div className="outerContainer">
                <div className="container" style={{position:"absolute", top:"124px", right: "104px", width: "445px", height:"353px", backgroundColor: "#1f2833"}}>
                    <InfoBar room={this.state.room}/>
                    <button 
                    style={{
                        backgroundColor:"green", 
                        borderRadius:"5px",
                        marginRight: "5%",
                        marginLeft: "75%",
                        top: "-37px",
                        position: "relative"
                        }} onClick={() => this.handleBet()}>Bet +100</button>

                    <Messages messages={this.state.messages} name={this.state.user} balance={this.state.balance}/>

                    <Input message={this.state.message} setMessage={this.setMessage} sendMessage={this.sendMessage}/>
                </div>
                
            </div>
        )
    }

 
   
}

export default Chat;