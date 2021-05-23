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

function NewTeamForm(props) {
  console.log(props.name);
  
  return (
    <>
    <h4 className="text-center">New Team Form</h4>
      <form id="team" onClick={props.handleCreateClick}>
        <Row>
          <Col></Col>
          <Col>
            {/* <h1>Enter a team name</h1> */}
            {/* Team */}
            <div className="mb-3">
              <label htmlFor="test" className="form-label">Enter a team name</label>
              <input ref={props.refTeamName} type="text" className="form-control" id="test" aria-describedby="teamName" />
            </div>
            <button onClick={props.handleNewTeamSubmit} type="submit" className="btn btn-success">Submit</button>
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

export default NewTeamForm;