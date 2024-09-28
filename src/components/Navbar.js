import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.logoTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}>
            <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="mySwitch">Enable Dark Mode</label>
          </div> 
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    logoTitle: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    logoTitle: "Set Title here",
    aboutText: "ABout Text here"
}


