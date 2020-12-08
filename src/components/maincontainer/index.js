import React, { Component } from "react";
import Header from "./Header";
import NameCard from "./namecard";
import Name from "./name";
import EmployeeCard from "./EmployeeCard"
import Minion from "../../minions.json";

class MainContainer extends Component {
    constructor(){
        super()
        this.state ={
            results: []
        };
      console.log("constuctor")  
    }
    
   
    handleSingleMinion = event => {
        event.preventDefault();
        const value = event.target.innerHTML;
        let singleMinion = [];
        for(var i =0; i<Minion.length; i++){
            if(Minion[i].name === value){
                singleMinion.push(Minion[i])
            }
        }
        this.setState({results: singleMinion})
    };    
    handleViewAll = event => {        
        this.setState({results: Minion})
    };
    handleSortPay = event => {
        event.preventDefault();
        let minSort = []
        for(var i = 0; i<Minion.length; i++){
            minSort.push(Minion[i])
        }
        let paySort = minSort.sort((a, b) => {
            return b.pay - a.pay;
        });
        this.setState({results: paySort})
    };
    handleCoolGuy = event => {
        event.preventDefault();
        let CoolGuy = [];
        for(var i = 0; i<Minion.length; i++){
            if(Minion[i].department === "Coolest Dood Alive"){
                CoolGuy.push(Minion[i])
            };
        }
        this.setState({results: CoolGuy})
    };
    // componentDidMount() {
    //     this.handleViewAll()
    //     console.log("mount")
    // }

   
    
    
    render(){
        console.log("render")
        return (
            <div className="App">
            <main className="container-fluid" style={{paddingTop: "1rem"}}>
            <Header />
            <div className="row">
                <NameCard>
                <div className="card-header" style={{textAlign: "center"}}>Click for Info</div>
                <div className="card-body" style={{textAlign: "center"}}>
                {Minion.map((emp, index) => ( <Name key={index} empName={emp.name} class="btn btn-secondary" handleSingleMinion={this.handleSingleMinion}/>))}
                <Name empName="View All" class="btn btn-primary" handleSingleMinion={this.handleViewAll} />
                <Name empName="Sort by Pay" class="btn btn-primary" handleSingleMinion={this.handleSortPay} />
                <Name empName="View Coolest Guy" class="btn btn-primary" handleSingleMinion={this.handleCoolGuy}/>
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