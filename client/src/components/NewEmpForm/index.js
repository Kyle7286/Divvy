/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Col from "../Column";
import Row from "../Row";
import Container from "../Container";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/*
    Here I specify a Row and give it some basic bootstrap classes, 
    Then I pass props within that div (which is defined on my directory page
    as the Column component
*/

function NewEmpForm(props) {
  return (
    <>
      <h4 className="text-center">New Employee Form</h4>
      <form id="team" onClick={props.handleCreateClick}>
        <Row>
          <Col></Col>
          <Col>

            {/* Emp First Name */}
            <div className="mb-3">
              <label htmlFor="InputEmpFirstName" className="form-label">First Name</label>
              <input ref={props.refEmpFirstName} type="text" className="form-control" id="InputEmpFirstName" aria-describedby="empFirstName" />
            </div>

            {/* Emp Last Name */}
            <div className="mb-3">
              <label htmlFor="InputEmpLastName" className="form-label">Last Name</label>
              <input ref={props.refEmpLastName} type="text" className="form-control" id="InputEmpLastName" aria-describedby="empLastName" />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="InputEmail" className="form-label">Email</label>
              <input ref={props.refEmpEmail} type="text" className="form-control" id="InputEmail" aria-describedby="email" />
            </div>


            <div className="mb-3">
              <label htmlFor="InputPhone" className="form-label">Phone</label>
              <input ref={props.refEmpPhone} type="text" className="form-control" id="InputPhone" aria-describedby="email" />
            </div>

            <button onClick={props.handleNewEmpSubmit} type="submit" className="btn btn-success">Submit</button>
          </Col>
          <Col></Col>
        </Row>
      </form>

    </>


  )



}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default NewEmpForm;