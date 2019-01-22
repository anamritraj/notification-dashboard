import React from "react";
import "./notifications-pane.css";

export default function NotificationsPane(props) {
  return props.isPaneOpen ? (
    <div className="card NotificationsPane">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  ) : null;
}
