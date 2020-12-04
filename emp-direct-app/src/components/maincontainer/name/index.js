import React from "react";

function Name(props) {
    return (
      <button 
        type="button" 
        className={props.class} 
        onClick={props}
        style={{width: "80%", marginBottom: ".5rem"}}>{props.empName}</button>
    );
  }
  
  export default Name;