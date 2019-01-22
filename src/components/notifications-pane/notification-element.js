import React from "react";

export default function NotificationElement(props) {
  return (
    <li
      className={
        props.notification.isRead
          ? "list-group-item NotificationElement"
          : "list-group-item NotificationElement is-unread"
      }
    >
      <div className="notif-title">{props.notification.title}</div>
      <p>{props.notification.body}</p>
      <p className="ts">{props.notification.time}</p>
      <a
        className="mark-read"
        href="/"
        onClick={event => props.toggleRead(props.notification.id, event)}
      >
        {props.notification.isRead ? "Mark as unread" : "Mark as read"}
      </a>
    </li>
  );
}
