import React, { Component } from "react";
import Header from "./components/header/header";
import "./App.css";
import NotificationsPane from "./components/notifications-pane/notifications-pane";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: [
        {
          id: 1,
          title: "First one",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores minus placeat fugit quidem.",
          time: "Jan 22 2019 19:40:02",
          isRead: true
        },
        {
          id: 2,
          title: "First one",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores minus placeat fugit quidem.",
          time: "Jan 22 2019 19:40:02",
          isRead: false
        },
        {
          id: 3,
          title: "First one",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolores minus placeat fugit quidem.",
          time: "Jan 22 2019 19:40:02",
          isRead: false
        }
      ],
      notificationsPaneOpen: false
    };
  }

  /**
   *
   * Notification Config
   * {
   *  id:
   *  title:
   *  body:
   *  time:
   *  isRead:
   * }
   */

  randomString(length) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz".split(
      ""
    );

    if (!length) {
      length = Math.floor(Math.random() * chars.length);
    }

    var str = "";
    for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  }
  addNotification = () => {
    // Generate a new Random notification

    const notification = {
      id: this.randomString(8),
      title: this.randomString(15),
      time: Date().toString(),
      body: "Random body for the notification",
      isRead: false
    };

    const newState = {
      ...this.state,
      notifications: [...this.state.notifications, notification],
      unReadNotifications: this.state.unReadNotifications + 1
    };

    this.setState(newState);
  };

  toggleRead = (notificationId, event) => {
    event.preventDefault();
    let notifications = this.state.notifications;

    let newNotifications = notifications.map(n => {
      if (n.id === notificationId) {
        n.isRead = !n.isRead;
      }
      return n;
    });

    let newState = {
      ...this.state,
      notifications: newNotifications
    };

    this.setState(newState);
  };

  // Handle Bell click in header
  handleBellClicker = event => {
    event.preventDefault();
    console.log("Bell Clicked!");
    const newState = {
      ...this.state,
      notificationsPaneOpen: !this.state.notificationsPaneOpen
    };

    this.setState(newState);
  };

  getUnreadNotificationsCount = () => {
    let count = this.state.notifications.reduce((count, notf) => {
      return notf.isRead ? count : count + 1;
    }, 0);
    return count;
  };

  // Mark all as read
  markAllAsRead = event => {
    event.preventDefault();
    let newNotifications = this.state.notifications.map(n => {
      n.isRead = true;
      return n;
    });

    let newState = {
      ...this.state,
      notifications: newNotifications
    };

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header
          isPaneOpen={this.state.notificationsPaneOpen}
          notificationsCount={this.getUnreadNotificationsCount()}
          bellClicked={this.handleBellClicker}
        />
        <NotificationsPane
          markAllAsRead={this.markAllAsRead}
          isPaneOpen={this.state.notificationsPaneOpen}
          notifications={this.state.notifications}
          toggleRead={this.toggleRead}
        />

        <div className="container">
          <div className="text-center">
            <button
              className="btn btn-large btn-primary"
              onClick={this.addNotification}
            >
              {" "}
              Add a notification
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
