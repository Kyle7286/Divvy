/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import { STATES } from "mongoose";
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Col from "../components/Column"
import Row from "../components/Row"
import Container from "../components/Container"

// Styling Imports
import './profile.css';
import { FaBeer } from 'react-icons/fa';


/* -------------------------------------------------------------------------- */
/*                           Set Mobile BreakPoints                           */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

function Profile() {

    /* ---------------------------------- State --------------------------------- */

    const [user, setUser] = useState({})

    // Call when components have loaded
    useEffect(() => {
        getUser();
    }, [])


    function getUser() {
        API.getSingleUser()
            .then(res => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>

            <h1 className="mb-4">Profile</h1>
            <p>Hi! I'm Profile Page. Nice to meet you.</p>

            <Container>
                <Row>
                    <Col />
                    <Col>
                        <div>
                            <img src="https://randomuser.me/api/portraits/men/49.jpg" width="250px" alt="profile picture" className="rounded-pill"></img>
                            <FaBeer className="icon-button"/>
                        </div>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input className="d-inline" value={user.first_name} type="text"></input>
                            <input value={user.last_name} type="text"></input>
                        </div>
                    </Col>
                </Row>
                {/* <input value={user.email} type="text" minLength="1" minWidth="50" length="10000"></input> */}
            </Container>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Profile;