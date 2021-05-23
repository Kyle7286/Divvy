/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Col from "../Column";
import Row from "../Row";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


function NewTeamForm(props) {
  console.log(props.name);
  
  return (
    <>
      <h4 className="text-center my-3">New Team Form</h4>
        <form id="team" onClick={props.handleCreateClick}>
          <Row>
            <Col className="col-lg-6 mx-auto">
              {/* Team */}
                <div className=" text-center">
                  <label htmlFor="test" className="form-label">Team Name</label>
                  <input ref={props.refTeamName} type="text" className="form-control" id="test" aria-describedby="teamName" />
                </div>
                <div className="text-center">
                  <button onClick={props.handleNewTeamSubmit} type="submit" className="btn btn-warning my-3">Create</button>
                </div>
            </Col>
          </Row>
        </form>
    </>
  )

}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default NewTeamForm;