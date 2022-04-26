import React, { Component } from 'react';
import './style.css';

class SideBar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <img src="%PUBLIC_URL%../../white.jpg" width="180" height="180" class="d-inline-block align-top" alt="" />

            <li>
              <div className="dropdown">
                <button className="dropbtn">Supplier Management</button>
                <div className="dropdown-content">
                  <a href="/dash">Dashboard</a>
                  <a href="/">Furnithure Testing</a>
                  <a href="/rep">Furniture Monitoring</a>
                  <a href="/defect">Furniture Reporting</a>
                </div>
              </div>
            </li>

          </ul>
        </div>


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#">
            <img src="%PUBLIC_URL%../../bluelogo.png" width="30" height="30" class="d-inline-block align-top" alt="" />
            Comfort Zone Furniture
          </a>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">HELP</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  }
}

export default SideBar;