import React from "react";
import queryString from "query-string";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import { v4 as uuidv4 } from "uuid";


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      betting: false,
      betInput: "",
      user: JSON.parse(localStorage.getItem("user")),
      id: ""
    };
    console.log("beginning state is", this.state);

    this.sendMessage = this.sendMessage.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.setMessageList = this.setMessageList.bind(this);
  }

  componentDidMount() {
    if (this.state.user === null) {
      alert("You must be logged in to access the league page");
      window.location.replace("/league");
      console.log("chat js console log -- hello");
    } else if (this.state) {
      // console.log("chat js console", this.state)
      window.socket.emit("join", {
        name: this.state.user.username,
        room: "cod",
      });

      //
      window.socket.on("message", (message) => {
        console.log("type of messasge is", typeof message);
        console.log("message recieved (client)", message);
        this.setMessageList(message);
      });
    } else {
      console.log("cannot join user");
    }
  }

  //function for sending messages
  sendMessage = (event) => {
    event.preventDefault();
    console.log("message is being sent", this.state.message);

    if (this.state.message) {
      window.socket.emit("sendMessage", { message: this.state.message });
    } else {
      console.log("no message to send");
    }
  };

  setMessageList(message) {
    console.log("about to append message", message);
    const uid = uuidv4();
    if (this.state.messages.length == 0) {
      let m = {
        user: message.user,
        text: message.text.message,
        id: uid,
      };
      let mList = [];
      mList.push(m);
      this.setState({
        messages: mList,
        id: uid
      });
    } else {
      let m = {
        user: message.user,
        text: message.text.message,
        id: uid,
      };

      let mList = [];
      for (let i = 0; i < this.state.messages.length; i++) {
        mList.push(this.state.messages[i]);
      }
      mList.push(m);
      this.setState({
        messages: mList,
        id: uid
      });
      console.log("message list after appending", this.state.messages);
    }

    this.setMessage("");
  }

  // sets the message to send to server through ws
  setMessage(message) {
    console.log("gg");
    this.setState({
      message: message,
    });
  }

  handleBetToggle = () => {
    if (this.state.betting) {
      updateUserBalance(this.state.user.id, +this.state.betInput);
    }
    this.setState({ betting: !this.state.betting });
  };

  render() {
    console.log("rendering");
    return (
      <div className="outerContainer">
        <div
          className="container"
          style={{
            marginBottom: "78vw",
            marginRight: "104px",
            width: "445px",
            height: "500px",
            backgroundColor: "#1f2833",
          }}
        >
          <InfoBar room={this.state.room} />

          <Messages
            messages={this.state.messages}
            name={this.state.user}
            bet={this.state.user.id}
            unique={this.state.id}
          />

          <Input
            message={this.state.message}
            setMessage={this.setMessage}
            sendMessage={this.sendMessage}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
