import React, { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import EditPostQC from "./components/EditPostQC";
import Home from "./components/Home";
import PostDetailsQC from "./components/PostDetailsQC";
import QualityDash from "./components/QualityDash";
import SideBar from "./components/SideBar";
import DefectCard from "./components/DefectCard";
import CreatepostQC from "./components/CreatepostQC";
import jsPDF from "jspdf";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="page-content-wrapper">
         <SideBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreatepostQC}></Route>
         <Route path="/edit/:id" component={EditPostQC}></Route>
         <Route path="/post/:id" component={PostDetailsQC}></Route>
         <Route path="/dash" component={QualityDash}></Route>
         <Route path="/defect" component={DefectCard}></Route>
         <Route path="/rep" component={PostDetailsQC}></Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;