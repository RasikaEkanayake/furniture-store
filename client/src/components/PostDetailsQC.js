import React, { Component } from "react"; 
import axios from 'axios';
import './style.css';
import jsPDF from "jspdf";


class PostDetailsQC extends Component {

  constructor(props){
    super(props);

    this.state = {
      post:{}
    };

  }
  generatePDF=()=>{
    var doc = new jsPDF("p","pt","a4");
    doc.html(document.querySelector("#print"),{
      callback: function(pdf){
        var pageCount = doc.internal.getNumberOfPages();
        pdf.save("Furniture");
      }
    });
  };


  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res)=>{
      if(res.data.success){
        this.setState({ 
          post:res.data.post
        });
        console.log(this.state.post);
      }
    });
  }

  render() {

    const {OrderID,CheckedDate,ArrivalDate,BuyerID,requirment1,requirment2,Qualityrate} = this.state.post;

      return (
          <div id="wrapper" className="toggled">
        <div id="page-content-wrapper">
            <div className="container-fluid">
          <div class="card text-center">
    
    <div className="card-body" id="print">
    <div className="card-header" >
      Furniture
    </div>
      <h5 className="card-title"></h5>
      <div style={{margineTop:'20px'}}>
       <dt className="col-sm-3"><h4>Order ID</h4><h4>{OrderID}</h4></dt>
         <hr/>

        <dl className="row">
          <dt className="col-sm-3">CheckedDate</dt>
          <dd className="col-sm-9">{CheckedDate}</dd>
  
          <dt className="col-sm-3">ArrivalDate</dt>
          <dd className="col-sm-9">{ArrivalDate}</dd>
  
          <dt className="col-sm-3">BuyerID</dt>
          <dd className="col-sm-9">{BuyerID}</dd>
  
          <dt className="col-sm-3">requirment1</dt>
          <dd className="col-sm-9">{requirment1}</dd>
  
          <dt className="col-sm-3">requirment2</dt>
          <dd className="col-sm-9">{requirment2}</dd>
  
          <dt className="col-sm-3">Quality rate</dt>
          <dd className="col-sm-9">{Qualityrate}</dd>
        </dl>
    </div>
    </div>
    <button className="btn btn-danger" onClick={this.generatePDF()} type="primary">Print Report</button>
    <hr/>
            <div className="row">
    <div className="col-sm-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Testing</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="/" className="btn btn-primary">Go Testing</a>
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
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>
  
          </div>
          </div>
          </div>
          </div>
      );
  }
}

export default PostDetailsQC;