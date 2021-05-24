/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Col from "../Column";
import Row from "../Row";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


function NewEmpForm(props) {

  console.log(props.teams);
  return (
    <>
      <h4 className="text-center my-3">New Employee Form</h4>
      <form id="team" onClick={props.handleCreateClick}>
        <Row>
          <Col className="col-lg-6 mx-auto">
            {/* Team Selection */}
            <div className="mb-3 mx-2 text-center">
              <label htmlFor="SelectTeam" className="form-label">Select Team</label>
              <select ref={props.refTeamSelected} name="selectList" id="selectList" className="form-select">
                {props.teams.map((team) => {
                  return (
                    <option key={team.id} value={team.id}>{team.name}</option>
                  )
                })}
              </select>
            </div>

            {/* Manager Selection */}
            <div className="mb-3 mx-2  text-center">
              <label htmlFor="InputEmpFirstName" className="form-label">Is Manager</label>
              <select ref={props.refIsManager} name="selectList" id="selectList" className="form-select">
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
              </select>
            </div>

            {/* Emp First Name */}
            <div className="mb-3 mx-2  text-center">
              <label htmlFor="InputEmpFirstName" className="form-label">First Name</label>
              <input ref={props.refEmpFirstName} type="text" className="form-control" id="InputEmpFirstName" aria-describedby="empFirstName" />
            </div>

            {/* Emp Last Name */}
            <div className="mb-3 mx-2  text-center">
              <label htmlFor="InputEmpLastName" className="form-label">Last Name</label>
              <input ref={props.refEmpLastName} type="text" className="form-control" id="InputEmpLastName" aria-describedby="empLastName" />
            </div>

            {/* Email */}
            <div className="mb-3 mx-2  text-center">
              <label htmlFor="InputEmail" className="form-label">Email</label>
              <input ref={props.refEmpEmail} type="text" className="form-control" id="InputEmail" aria-describedby="email" />
            </div>

            {/* Phone */}
            <div className="mb-3 mx-2  text-center">
              <label htmlFor="InputPhone" className="form-label">Phone</label>
              <input ref={props.refEmpPhone} type="text" className="form-control" id="InputPhone" aria-describedby="email" />
            </div>

            <div className="text-center">
              <button onClick={props.handleNewEmpSubmit} type="submit" className="btn btn-warning my-3">Create</button>
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

export default NewEmpForm;