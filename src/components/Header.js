import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">News app  <i className="material-icons">public</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default Header;
