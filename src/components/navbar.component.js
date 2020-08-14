import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-white navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">How it Works</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Team</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Sponsors</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">News</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Contact US</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}

