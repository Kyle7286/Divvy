/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from "react";
import API from "../../utils/API"
import Col from "../../components/Column";
import Row from "../../components/Row";
import Container from "../../components/Container";
import NewClientForm from "../../components/NewClientForm";
import NewTeamForm from "../../components/NewTeamForm";
import NewEmpForm from "../../components/NewEmpForm";
import _ from "underscore";

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

    const [org, setOrg] = useState(
        {
            org: {}
        }
    );
    const [error, setError] = useState({});

    // Call when components have loaded
    useEffect(() => {
        getOrg();
        updateError("info", {});
    }, [])

    // Set the error state
    function updateError(type, error) {
        // If error, set error
        if (type === "error") {
            let message;

            if (error.type === "unique violation" && error.message.includes("email")) {
                error.message = "Email already in use!"
            } else if (error.type === "unique violation" && error.message.includes("phone")) {
                error.message = "Phone number already in use!"
            } else if (error.type === "unique violation" && error.message.includes("name")) {
                error.message = "Firm name already in use!"
            }

            setError({
                visible: true,
                message: error.message,
                color: "danger"
            })

        } else if (type === "info") {

            setError({
                visible: true,
                message: error.message,
                color: "success"
            })
        }

    }

    // Set the user state
    function getOrg() {
        API.getOrg()
            .then(res => {
                setOrg(res.data)
            })
            .catch(err => console.log(err));
    };

    // Used to help display the proper forms
    const [visible, setVisible] = useState(
        {
            client: false,
            team: false,
            emp: false,
        }
    );

    // Show/hide the form for the respective button clicked
    const handleCreateClick = (e) => {
        e.preventDefault();

        let temp = { ...visible }

        if (temp[e.target.id]) {
            temp = _.mapObject({ ...visible }, () => false)
        } else {
            temp = _.mapObject({ ...visible }, () => false)
            temp[e.target.id] = true
        }

        // Clear info div
        updateError("info", {});

        // Make form visible
        setVisible(temp)
    }

    // Ref Variables - New Client Form
    let refFirm = React.createRef();
    let refFirstName = React.createRef();
    let refLastName = React.createRef();
    let refEmail = React.createRef();
    let refPhone = React.createRef();
    let refAdd1 = React.createRef();
    let refAdd2 = React.createRef();
    let refCity = React.createRef();
    let refState = React.createRef();
    let refZip = React.createRef();

    // Handle new client button
    const handleNewClientSubmit = (e) => {
        e.preventDefault();

        // Create form input data object
        const newClient = {
            name: refFirm.current.value,
            first_name: refFirstName.current.value,
            last_name: refLastName.current.value,
            email: refEmail.current.value,
            phone_number: refPhone.current.value,
            add1: refAdd1.current.value,
            add2: refAdd2.current.value,
            city: refCity.current.value,
            state: refState.current.value,
            zip: refZip.current.value
        }

        // If you have filled out all the form fields...
        if (refFirm.current.value
            && refFirstName.current.value
            && refLastName.current.value
            && refEmail.current.value
            && refPhone.current.value
            && refAdd1.current.value
            && refCity.current.value
            && refState.current.value
            && refZip.current.value
        ) {
            // Send input data to server for creation
            API.createNewClient(newClient)
                .then(res => {
                    console.log(res.data);
                    updateError("info", { message: "New client successfully created!" })
                })
                .catch(err => {
                    console.log(`========= HIT THE CATCH ============`);
                    updateError("error", JSON.parse(err.response.request.response).errors[0])
                    console.log(err)
                });
        } else {
            updateError("error", { message: "Please enter info into all fields..." })
            console.log("Clicked");
        }

    }

    let refTeamName = React.createRef();

    // Handle new Team button
    const handleNewTeamSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        if (refTeamName.current.value) {

            API.createNewTeam({ name: refTeamName.current.value })
                .then(res => {
                    updateError("info", { message: "Team successfully created!" });
                })
                .catch(err => {
                    updateError("error", JSON.parse(err.response.request.response).errors[0])
                })
        } else {
            updateError("error", { message: "Please enter a Team Name." })
        }

    }

    let refEmpFirstName = React.createRef();
    let refEmpLastName = React.createRef();
    let refEmpPhone = React.createRef();
    let refEmpEmail = React.createRef();

    // Handle New Employee Form
    const handleNewEmpSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            first_name: refEmpFirstName.current.value,
            last_name: refEmpLastName.current.value,
            phone_number: refEmpPhone.current.value,
            email: refEmpEmail.current.value,
            role: "Employee",
        }

        if (refEmpFirstName.current.value
            && refEmpLastName.current.value
            && refEmpEmail.current.value
            && refEmpPhone.current.value
        ) {
            API.creatNewEmployee(newEmployee)
                .then(res => {
                    // console.log(res.data);
                    updateError("info", { message: "Employee successfully created!" });
                })
                .catch((err) => {
                    updateError("error", JSON.parse(err.response.request.response).errors[0])

                })
        } else {
            updateError("error", { message: "Please fill out all fields." })
        }

    }

    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>

            <h1 className="mb-4">Organization</h1>
            <Container className="m-3">

                <h1 className="text-center" style={{ marginBottom: "5rem" }}>{org.org.name}</h1>

                <Row>
                    <Col>
                        <Row>
                            <Col></Col>
                            <Col>
                                <div>
                                    <button id="client" onClick={handleCreateClick} className="btn btn-dark me-5 mb-5">New Client</button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <button id="team" onClick={handleCreateClick} className="btn btn-dark me-5 mb-5">New Team</button>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <button id="emp" onClick={handleCreateClick} className="btn btn-dark me-5 mb-5">New Employee</button>
                                </div>
                            </Col>
                            <Col></Col>

                            {visible.client ? <NewClientForm
                                handleNewClientSubmit={handleNewClientSubmit}
                                refFirm={refFirm}
                                refFirstName={refFirstName}
                                refLastName={refLastName}
                                refEmail={refEmail}
                                refPhone={refPhone}
                                refAdd1={refAdd1}
                                refAdd2={refAdd2}
                                refCity={refCity}
                                refState={refState}
                                refZip={refZip}
                            /> : null}

                            {visible.team ? <NewTeamForm
                                handleNewTeamSubmit={handleNewTeamSubmit}
                                refTeamName={refTeamName}
                            /> : null}

                            {visible.emp ? <NewEmpForm
                                handleNewEmpSubmit={handleNewEmpSubmit}
                                refEmpFirstName={refEmpFirstName}
                                refEmpLastName={refEmpLastName}
                                refEmpEmail={refEmpEmail}
                                refEmpPhone={refEmpPhone}

                            /> : null}


                        </Row>
                        {error.visible ? <div className={`mb-2 text-center text-${error.color}`} >{error.message}</div> : <div className="mb-2 text-center"></div>}
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