import React, { Component } from "react";
import Header from "./Header";
import NameCard from "./namecard";
import Name from "./name";
import EmployeeCard from "./EmployeeCard"

class MainContainer extends Component {
    state ={
        results: []
    };
    // componentDidMount() {
    //     this.handleViewAll()
    // }
    render(){
        return (
            <div className="App">
            <main className="container-fluid" style={{paddingTop: "1rem"}}>
            <Header />
            <div className="row">
                <NameCard>
                <div className="card-header" style={{textAlign: "center"}}>Click for View</div>
                <div className="card-body" style={{textAlign: "center"}}>
                <Name empName="wukawukaEMPLOYEENAMEGOESHEREwukawuka" class="btn btn-secondary"/>
                <Name empName="View All" class="btn btn-primary" />
                <Name empName="Sort by Pay" class="btn btn-primary" />
                <Name empName="View Dev Team" class="btn btn-primary"/>
                </div>
                </NameCard>
                <EmployeeCard results={this.state.results} />


            </div>

            </main>    
           
                
             
            </div>
          );

    }
    
  }

  export default MainContainer;