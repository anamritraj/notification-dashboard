import React, { Component } from "react";
import Header from "./components/header/header";
import "./App.css";
import NotificationsPane from "./components/notifications-pane/notifications-pane";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [],
      notificationsPaneOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          isPaneOpen={this.state.notificationsPaneOpen}
          notificationsCount={this.state.notifications.length}
        />
        <NotificationsPane
          isPaneOpen={this.state.notificationsPaneOpen}
          notifications={this.state.notifications}
        />
      </div>
    );
  }
}

export default App;
