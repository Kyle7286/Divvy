/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";
import ProfileForm from "../../components/ProfileForm";
import ProgressBar from "../../components/Progress-Bar";
import RewardsContainer from "../../components/RewardsContainer";
import "../../index.css";

// Styling Imports
import './profile.css';
import { FaLink, FaUpload } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import SectionHeader from "../../components/SectionHeader";

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

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [picture, setPicture] = useState({});


    // Call when components have loaded
    useEffect(() => {
        getUser();
        updateError(false, null);
        updatePicture(false);
    }, [])


    // Set the user state
    function getUser() {
        API.getCurrentUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    };

    // Set the error state
    function updateError(visible, type) {
        if (type === "unique violation") {
            type = "Email already in use! Please enter a different email."
        }

        setError({
            visible: visible,
            type: type
        })
    }

    // Show the url element when picture is clicked
    function updatePicture(visible) {
        setPicture({
            visible: visible
        })
    }

    // Define references and general variables for values on update
    let latestFirstName = React.createRef();
    let latestLastName = React.createRef();
    let latestEmail = React.createRef();
    let latestPhone = React.createRef();

    // Update the user with the form values
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

        callUpdateUser(updatedProfile);
    }


    // Make the API call to update the user details
    function callUpdateUser(obj) {
        API.updateUser(user.id, obj)
            .then(res => console.log('axio put response', res))
            .then(() => {
                getUser();
                updateError(false, null);
            })
            .catch(err => {
                let errorType = JSON.parse(err.response.request.response).errors[0].type;

                // Set the error state for displaying
                updateError(true, errorType);
            });
    }

    // Show the update profile picture element when you click the profile picture.
    function handleImageClick(e) {
        e.preventDefault();
        console.log("clicked");

        setPicture({
            visible: true
        });
    }


    let latestURL = React.createRef();
    // Update the Profile Picture when you press upload button
    function handleUpdateURLClick(e) {
        e.preventDefault();

        console.log(latestURL.current.value);

        let obj = {
            profile_icon: latestURL.current.value
        }

        callUpdateUser(obj);
        updatePicture(false);
    }

    // Hide the div when you press the cancle button
    function handleCancleClick(e) {
        e.preventDefault();
        updatePicture(false);
    }

    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
    ];


    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>

            <Container className="mt-4 mb-4 mx-4">
                <Row>
                    <Col className="col-lg-6 divvy-bg-tile shadow mx-auto p-0">
                        <SectionHeader>My Info</SectionHeader>
                        <Row className="">
                            
                            <Col className="col-lg-5" >
                                <div onClick={handleImageClick} className="profile-img my-3 text-center">
                                    <img src={user.profile_icon ? user.profile_icon : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"} width="200px" alt="profile picture" className=" border border-warning shadow-lg rounded-pill"></img>
                                    <FaLink className="icon-button" />
                                </div>
                            </Col>

                            <Col className="col-lg-3">
                                {testData.map((item, idx) => (
                                    <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                                ))}
                            </Col>

                            <Col>
                                <form className={picture.visible ? "text-center" : "text-center d-block d-none"}>
                                    <div>
                                        <label htmlFor="InputURL" className="form-label mt-5 d-block">Enter Profile Image URL</label>
                                        <input ref={latestURL} id="InputURL" defaultValue={user.profile_icon} className="me-1"></input>
                                        <button onClick={handleUpdateURLClick} className="text-primary me-1"><FaUpload className="url-save-button" /></button>
                                        <div onClick={handleCancleClick} className="text-danger d-inline"><GiCancel className="url-save-button" /></div>
                                    </div>
                                </form>
                            </Col>
                            <RewardsContainer />

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