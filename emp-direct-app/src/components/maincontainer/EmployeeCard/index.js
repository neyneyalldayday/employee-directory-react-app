import React from "react";

function EmployeeCard(props) {
    return (
        <section className="col-9">
            {props.results.map(result => (
                <div className="card" style={{marginBottom: "1rem"}}>
                <div className="card-body">
                  <h4 className="card-title">{result.name}</h4>
                  <p className="card-text"><strong>Position: </strong>{result.position}</p>
                  <p className="card-text"><strong>Pay: </strong>{result.pay}</p>
                  <p className="card-text"><strong>Department: </strong>{result.department}</p>
                  <p className="card-text"><strong>Email: </strong>{result.email}</p>
                </div>
              </div>
            ))}
        </section>
    )
}

export default EmployeeCard;
