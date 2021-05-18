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
    const [error, setError] = useState({})


    // Call when components have loaded
    useEffect(() => {
        getUser();
        updateError(false, null);
    }, [])


    function getUser() {
        API.getCurrentUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    };

    function updateError(visible, type) {
        if (type === "unique violation") {
            type = "Email already in use! Please enter a different email."
        }

        setError({
            visible: visible,
            type: type
        })
    }

    // Define references and general variables for values on update
    let latestFirstName = React.createRef();
    let latestLastName = React.createRef();
    let latestEmail = React.createRef();
    let latestPhone = React.createRef();


    function handleFormSubmit(e) {
        // Allow page refresh if no error on save
        if (!error.visible) {
            console.log("Refreshing page");
            e.preventDefault();
        }

        const updatedProfile = {
            first_name: latestFirstName.current.value,
            last_name: latestLastName.current.value,
            email: latestEmail.current.value,
            phone_number: latestPhone.current.value,
            last_name: latestLastName.current.value,
        }


        // Make the API call to update the ticket
        API.updateUser(user.id, updatedProfile)
            .then(res => console.log('axio put response', res))
            .then(() => {
                getUser();
                updateError(false, null);
            })
            .catch(err => {
                console.log(`=============================`);
                console.log(JSON.parse(err.response.request.response))
                console.log(JSON.parse(err.response.request.response).errors[0].type)

                let errorType = JSON.parse(err.response.request.response).errors[0].type;

                // Set the error state for displaying
                updateError(true, errorType);


            });
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
                        <Row>
                            <Col>
                                <ProfileForm
                                    singleuser={user}
                                    handleFormSubmit={handleFormSubmit}
                                    latestFirstName={latestFirstName}
                                    latestLastName={latestLastName}
                                    latestEmail={latestEmail}
                                    latestPhone={latestPhone}
                                    error={error}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
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