import React, { Component } from "react";
import axios from "axios";

class CreatepostQC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      OrderID: "",
      CheckedDate: "",
      ArrivalDate: "",
      BuyerID: "",
      requirment1: "",
      requirment2: "",
      Qualityrate: ""
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
    const { OrderID, CheckedDate, ArrivalDate, BuyerID, requirment1, requirment2, Qualityrate } = this.state;
    const data = {
      OrderID: OrderID,
      CheckedDate: CheckedDate,
      ArrivalDate: ArrivalDate,
      BuyerID: BuyerID,
      requirment1: requirment1,
      requirment2: requirment2,
      Qualityrate: Qualityrate
    }

    console.log(data);

    axios.post("/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            OrderID: "",
            CheckedDate: "",
            ArrivalDate: "",
            BuyerID: "",
            requirment1: "",
            requirment2: "",
            Qualityrate: ""
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
            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-nomal">Add Data</h1>
              <form className="needs-validation" noValidate>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Order ID</lable>
                  <input type="text"
                    className="form-control"
                    name="OrderID"
                    placeholder="Enter Order ID"
                    value={this.state.OrderID}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Checked Date</lable>
                  <input type="text"
                    className="form-control"
                    name="CheckedDate"
                    placeholder="Enter CheckedDate"
                    value={this.state.CheckedDate}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Arrival Date</lable>
                  <input type="text"
                    className="form-control"
                    name="ArrivalDate"
                    placeholder="EnterArrivalDate"
                    value={this.state.ArrivalDate}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>BuyerID</lable>
                  <input type="text"
                    className="form-control"
                    name="BuyerID"
                    placeholder="Enter BuyerID"
                    value={this.state.BuyerID}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>requirment1</lable>
                  <input type="text"
                    className="form-control"
                    name="requirment1"
                    placeholder="Enter requirment1"
                    value={this.state.requirment1}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>requirment2</lable>
                  <input type="text"
                    className="form-control"
                    name="requirment2"
                    placeholder="Enter requirment2"
                    value={this.state.requirment2}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <lable style={{ marginBottom: '5px' }}>Qualityrate</lable>
                  <input type="text"
                    className="form-control"
                    name="Qualityrate"
                    placeholder="Enter Quality"
                    value={this.state.Qualityrate}
                    onChange={this.handleInputChange} />
                </div>

                <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                  <i className="far fa-check-square"></i>
                  &nbsp; Save
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

export default CreatepostQC;