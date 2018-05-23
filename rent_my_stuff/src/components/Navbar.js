import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = ({ loggedIn, logout }) => {
  return (
    <nav className=".navbar-default .navbar-collapse">
      <br />
      <div class="container">
        <div class="navbar-header">
          <Link to="/"><img style={{ height: '80px', width: '80px' }} src={logo} /></Link>
        </div>
        <ul class="nav navbar-nav">
          <br />
          <li><Link to="/rentals">Rentals</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/HowItWorks">How It Works</Link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          {loggedIn ?
            [
              <br />,
              <li key={1}><Link className="nav-item nav-link" to="/MyItems">My Account</Link></li>,
              <li key={2}><Link className="nav-item nav-link" to="/PostListing">Post Listing</Link></li>,
              <li key={3}><a className="nav-item nav-link" href="/logout" onClick={logout}>Logout</a></li>
            ]
            :
            [
              <li><Link to="/signup"><span class="glyphicon glyphicon-user"></span>Signup</Link></li>,
              <li><Link to="/login"><span class="glyphicon glyphicon-log-in"></span>Login</Link></li>
            ]
          }
        </ul>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;