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

    return (
        <main className="my-0 divvy-bg" data-component="Wrapper">
            <Row>
                <Col className={props.loggedInStatus.loggedIn ? "col-lg-1" : "col-lg-1 p-0 bg-dark"}>
                    <Nav
                        loggedInStatus={props.loggedInStatus}
                        currentUser={props.currentUser}
                        handleLogout={props.handleLogout}>
                    </Nav>
                </Col>
                <Col className={props.loggedInStatus.loggedIn ? "col-lg-11" : "col-lg-11 p-0"}>
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