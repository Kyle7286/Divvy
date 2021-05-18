/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/* ----Define Queries For Rendering Mobile Nav or Non-Mobile(default) Nav---- */


// Will render mobile friendly nav, horizontal with diff layout
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1025 })
    return isMobile ? children : null
}

// Will render desktop friendly nav, vertical nav
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 1026 })
    return isNotMobile ? children : null
}

/* ------------- Define Main Nav Component (one mobile one not) ------------- */

function ProfileForm(props) {
    console.log(props.singleuser);

    return (
        <>

            <Container className="m-3">
                <form>
                    <Row>
                        <Col></Col>
                        <Col>
                            {/* First Name */}
                            <div className="mb-3">
                                <label htmlFor="InputFirstName" className="form-label">First Name</label>
                                <input ref={props.latestFirstName} defaultValue={props.singleuser.first_name} type="text" className="form-control" id="InputFirstName" aria-describedby="firstName" />
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label htmlFor="InputLastName" className="form-label">Last Name</label>
                                <input ref={props.latestLastName} defaultValue={props.singleuser.last_name} type="text" className="form-control" id="InputLastName" aria-describedby="lastName" />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email</label>
                                <input ref={props.latestEmail} defaultValue={props.singleuser.email} type="text" className="form-control" id="InputEmail" aria-describedby="email" />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-3">
                                <label htmlFor="InputPhone" className="form-label">Phone</label>
                                <input ref={props.latestPhone} defaultValue={props.singleuser.phone_number} type="text" className="form-control" id="InputPhone" aria-describedby="email" />
                            </div>
                        </Col>
                        <Col></Col>
                        <Col>
                            {/* Role */}
                            <fieldset disabled>
                                <div className="mb-3">
                                    <label htmlFor="disabledSelect" className="form-label">Role</label>
                                    <input defaultValue={props.singleuser.role} type="text" className="form-control" id="disabledSelect" aria-describedby="firstName" />
                                </div>
                            </fieldset>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="mt-5">
                        <Col></Col>
                        {/* Submit Changes */}
                        <Col className="text-center">
                            <button onClick={props.handleFormSubmit} type="submit" className="btn btn-success">Submit</button>
                        </Col>
                        <Col></Col>
                    </Row>
                </form>
            </Container>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default ProfileForm;
