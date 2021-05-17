/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";
import ProfileForm from "../../components/ProfileForm"

// Styling Imports
import './profile.css';
import { FaLink } from 'react-icons/fa';

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
        API.getCurrentUser()
            .then(res => {
                console.log(`RESPONSE BACK`);
                console.log(res.data.org.name);
                setUser(res.data);
            })
            .catch(err => console.log(err));
    };

    function updateProfileImg() {


    }

    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>

            <h1 className="mb-4">Profile</h1>
            <Container>
                <Row>
                    <Col />
                    <Col>
                        <div className="profile-img mb-5 text-center">
                            <img src={user.profile_icon ? user.profile_icon : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"} width="250px" alt="profile picture" className="rounded-pill"></img>
                            <FaLink className="icon-button" />
                        </div>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <ProfileForm
                                        singleuser={user}
                                    />
                                </Col>
                            </Row>

                        </Container>
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