/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Row from "../Row";
import Col from "../Column"
import Nav from "../Navbar"


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/*
    Props.children for this component comes from App.js. Within the wrapper component,
    The props here are other components we pass it, which will always
    be one of the page components as detrmined by the router and switch 
    setup on app.js
*/

function Wrapper(props) {

    const { loggedIn } = props.loggedInStatus;
    const tempLine = `Logged In: ` + loggedIn;
    return (
        <main className="wrapper" data-component="Wrapper">
            {/* {RELine} */}
            <Row>
                <Col className="col-lg-1 bg-dark divvy-bg-nav">
                    <div className="text-warning text-center fw-bold fst-italic fs-4 mt-2">Divvy</div>
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