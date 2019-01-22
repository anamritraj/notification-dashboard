import React from "react";
import "./notifications-pane.css";
import NotificationElement from "./notification-element";
export default function NotificationsPane(props) {
  return props.isPaneOpen ? (
    <div className="card NotificationsPane">
      <a href="/" className="mark-all-read" onClick={props.markAllAsRead}>
        Mark all as read
      </a>
      <ul className="list-group list-group-flush">
        {props.notifications.map(notification => (
          <NotificationElement
            key={notification.id}
            notification={notification}
            toggleRead={props.toggleRead}
          />
        ))}
      </ul>
    </div>
  ) : null;
}
