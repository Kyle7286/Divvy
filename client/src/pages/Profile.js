/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import { STATES } from "mongoose";
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Col from "../components/Column"
import Row from "../components/Row"


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
            <p>Hi! I'm Profile Page. Nice to meet you.</p>,
            
            <Col className="m-auto">
                <img src="https://randomuser.me/api/portraits/men/49.jpg" alt="profile picture" className="rounded-pill"></img>
            </Col>
            <Col>
                <div>
                    <input value={user.first_name} type="text" minLength="1" minWidth="50"></input>
                    <input value={user.last_name} type="text" minLength="1" minWidth="50"></input>
                </div>
            </Col>
            <input value={user.email} type="text" minLength="1" minWidth="50" length="10000"></input>
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