import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import User from "./components/User";

var config = {
  apiKey: "AIzaSyAznF2GHVzfH2N1-mf_-wB1JJuO1e3H8QY",
  authDomain: "chat-room-a977e.firebaseapp.com",
  databaseURL: "https://chat-room-a977e.firebaseio.com",
  projectId: "chat-room-a977e",
  storageBucket: "chat-room-a977e.appspot.com",
  messagingSenderId: "99045457457"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      roomId: [],
      activeRoom: "",
      user: ""
    };
    this.setRoom = this.setRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setRoom(room) {
    this.setState({ activeRoom: room });
    console.log(this.state.activeRoom.key);
  }

  setUser(user) {
    console.log("setUser was called.");
    this.setState({ user: user });
    if (user) {
      console.log("set user to " + user.displayName);
    } else {
      console.log("null user was provided.");
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to The Chat Room</h1>
        </header>
        <RoomList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setRoom={this.setRoom}
        />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          user={this.state.user}
          setUser={this.setUser}
        />
        <User
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          setUser={this.setUser}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default App;
