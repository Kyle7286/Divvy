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
<<<<<<< HEAD
=======
    const tempLine = `Logged In: ` + loggedIn;
    console.log("Wrapper props: ", props);
>>>>>>> 11ebef44d4c493378a6bfeaa12e90a4d56526b42
    return (
        <main className="wrapper divvy-bg" data-component="Wrapper">
            <Row>
                <Col className="col-lg-1 bg-dark">
                    <div className="text-warning text-center fw-bold fst-italic fs-1 mt-2 divvy-font-logo">Divvy</div>
                    <Nav
                        loggedInStatus={props.loggedInStatus}
                        currentUser={props.currentUser}
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