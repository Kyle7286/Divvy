/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";

// Styling Imports
import './org.css';
// import { FaLink, FaUpload } from 'react-icons/fa';
// import { GiCancel } from 'react-icons/gi';

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

function Org() {

    /* ---------------------------------- State --------------------------------- */

    const [org, setOrg] = useState({});


    // Call when components have loaded
    useEffect(() => {
        getOrg();

    }, [])


    // Set the user state
    function getOrg() {
        // API.getCurrentUser()
        //     .then(res => setUser(res.data))
        //     .catch(err => console.log(err));
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
        // API.updateUser(user.id, obj)
        //     .then(res => console.log('axio put response', res))
        //     .then(() => {
        //         getUser();
        //         updateError(false, null);
        //     })
        //     .catch(err => {
        //         let errorType = JSON.parse(err.response.request.response).errors[0].type;

        //         // Set the error state for displaying
        //         updateError(true, errorType);
        //     });
    }




    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>

            <h1 className="mb-4">Organization</h1>
            <Container>
                <Row>
                    <Col />
                    <Col>

                    </Col>
                    <Col />
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>

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

export default Org;