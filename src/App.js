import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

var config = {
    apiKey: "AIzaSyAznF2GHVzfH2N1-mf_-wB1JJuO1e3H8QY",
    authDomain: "bloc-chat-a977e.firebaseapp.com",
    databaseURL: "https://bloc-chat-a977e.firebaseio.com",
    projectId: "bloc-chat-a977e",
    storageBucket: "bloc-chat-a977e.appspot.com",
    messagingSenderId: "99045457457"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <RoomList firebase={firebase}

        />
          <h1 className="Room-List">Welcome to Chat Rooms</h1>

        </header>
         </div>

    );
  }
}

export default App;
