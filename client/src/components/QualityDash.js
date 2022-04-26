import React, { Component } from "react"; 

class QualityDash extends Component {
  render() {
    return (
        <div id="wrapper" className="toggled">
      <div id="page-content-wrapper">
          <div className="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Quelity Check Manager</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/dash"> &#62; Dash</a>
      </li>
    </ul>
  </div>
</nav>
          <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Testing</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="/" class="btn btn-primary">Go Testing</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Monitoring</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go Monitoring</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Reporting</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go Reporting</a>
      </div>
    </div>
  </div>
</div>

        </div>
        </div>
        </div>
    );
  }
}

export default QualityDash;