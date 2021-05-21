/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Row from "../Row";
import Col from "../Column"
import Nav from "../Navbar";
import "../../index.css";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


function Wrapper(props) {

    const { loggedIn } = props.loggedInStatus;
    const tempLine = `Logged In: ` + loggedIn;
    return (
        <main className="wrapper" data-component="Wrapper">
            {/* {RELine} */}
            <Row>
                <Col className="col-lg-1 bg-dark">
                    <div className="text-warning text-center fw-bold fst-italic fs-1 mt-2 divvy-font-logo">Divvy</div>
                    <Nav
                        loggedInStatus={props.loggedInStatus}
                        handleLogout={props.handleLogout}>
                    </Nav>
                </Col>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
/*
    Exported for use in app.js
*/
export default Wrapper;