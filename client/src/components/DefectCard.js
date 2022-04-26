import React, { Component } from "react";
import axios from "axios";
import './style.css';

class DefectCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      missingitem: "",
      misplased: "",
      ambigusitem: "",
      duplicateitem: "",
      srate: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { missingitem, misplased, ambigusitem, duplicateitem, srate } = this.state;
    const data = {
      missingitem: missingitem,
      misplased: misplased,
      ambigusitem: ambigusitem,
      duplicateitem: duplicateitem,
      srate: srate
    }
    if (missingitem == "") {
      alert("Enter missingitem");
    }


    console.log(data)

    axios.post("/post/save2", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            missingitem: "",
            misplased: "",
            ambigusitem: "",
            duplicateitem: "",
            srate: ""
          }
        )
      }
    })
  }

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
                    <a class="nav-link" href="/defect"> &#62; Defect Card</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-nomal">Add New</h1>
              <form className="needs-validation" >

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Enter Order ID</lable>
                  <input type="text"
                    className="form-control"
                    name="missingitem"
                    placeholder="Enter Order ID"
                    value={this.state.missingitem}
                    onChange={this.handleInputChange}
                    required />
                </div>
                <div className="valid-feedback">Looks good!</div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Enter CheckedDate</lable>
                  <input type="text"
                    className="form-control"
                    name="misplased"
                    placeholder="Enter CheckedDate"
                    value={this.state.misplased}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>EnterArrivalDate</lable>
                  <input type="text"
                    className="form-control"
                    name="ambigusitem"
                    placeholder="EnterArrivalDate"
                    value={this.state.ambigusitem}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Enter BuyerID</lable>
                  <input type="text"
                    className="form-control"
                    name="duplicateitem"
                    placeholder="Enter BuyerID"
                    value={this.state.duplicateitem}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Enter requirment1</lable>
                  <input type="text"
                    className="form-control"
                    name="srate"
                    placeholder="Enter requirment1"
                    value={this.state.srate}
                    onChange={this.handleInputChange} />
                </div>

                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="contain">
            <div class="col">
              <h1>Company</h1>
              <ul>
                <li>Contact us</li>
                <li>Suggestion</li>
              </ul>
            </div>
            <div class="col">
              <h1></h1>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="col">
              <h1></h1>
              <ul>
                <li>Copyright reserved</li>
              </ul>
            </div>
            <div class="col">
              <h1></h1>
              <ul>
              </ul>
            </div>
            <div class="col social">
              <h1>Social</h1>
              <ul>
                <li>Discription goes to here</li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default DefectCard;