import React from "react";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Notifications
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="fa fa-bell" />
                {props.notificationsCount}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
