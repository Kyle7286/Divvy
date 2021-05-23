/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function NewTeamForm(props) {
  return (
    <>
    <h4 className="text-center my-3">New Client Form</h4>
      <form>
        <Row>
          <Col className="col-lg-5 mx-auto">
            {/* Firm */}
            <div className="mb-3 text-center">
              <label htmlFor="InputFirmName" className="form-label">Firm</label>
              <input ref={props.refFirm} type="text" className="form-control" id="InputFirmName" aria-describedby="firmName" />
            </div>

            {/* Client First Name */}
            <div className="mb-3 text-center">
              <label htmlFor="InputClientFirstName" className="form-label">First Name</label>
              <input ref={props.refFirstName} type="text" className="form-control" id="InputClientFirstName" aria-describedby="clientFirstName" />
            </div>

            {/* Client Last Name */}
            <div className="mb-3 text-center">
              <label htmlFor="InputClientLastName" className="form-label">Last Name</label>
              <input ref={props.refLastName} type="text" className="form-control" id="InputClientLastName" aria-describedby="clientLastName" />
            </div>

            {/* Email */}
            <div className="mb-3 text-center">
              <label htmlFor="InputEmail" className="form-label">Email</label>
              <input ref={props.refEmail} type="text" className="form-control" id="InputEmail" aria-describedby="email" />
            </div>


            <div className="mb-3 text-center">
              <label htmlFor="InputPhone" className="form-label">Phone</label>
              <input ref={props.refPhone} type="text" className="form-control" id="InputPhone" aria-describedby="email" />
            </div>
          </Col>
          <Col className="col-lg-5 mx-auto">
            {/* Address 1 */}
            <div className="mb-3 text-center">
              <label htmlFor="InputAdd1" className="form-label">Address 1</label>
              <input ref={props.refAdd1} type="text" className="form-control" id="InputAdd1" aria-describedby="add1" />
            </div>

            {/* Address 2 */}
            <div className="mb-3 text-center">
              <label htmlFor="InputAdd2" className="form-label">Address 2</label>
              <input ref={props.refAdd2} type="text" className="form-control" id="InputAdd2" aria-describedby="add2" />
            </div>

            {/* City */}
            <div className="mb-3 text-center">
              <label htmlFor="InputCity" className="form-label">City</label>
              <input ref={props.refCity} type="text" className="form-control" id="InputCity" aria-describedby="city" />
            </div>

            {/* State */}
            <div className="mb-3 text-center">
              <label htmlFor="InputState" className="form-label">State</label>
              <input ref={props.refState} type="text" className="form-control" id="InputState" aria-describedby="state" />
            </div>

            {/* Zip */}
            <div className="mb-3 text-center">
              <label htmlFor="InputZip" className="form-label">Zip</label>
              <input ref={props.refZip} type="text" className="form-control" id="InputZip" aria-describedby="zip" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
                <div className="text-center text-center my-3">
                  <button onClick={props.handleNewClientSubmit} type="submit" className="btn btn-warning">Submit</button>
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