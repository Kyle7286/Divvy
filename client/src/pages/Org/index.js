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
import SectionHeader from "../../components/SectionHeader";
import "../../index.css";

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
    const [teams, setTeams] = useState({});

    // Call when components have loaded
    useEffect(() => {
        getOrg();
        getTeams();
        updateError("info", {});
    }, [])

    /* -------------- Button Characteristics and highlight handling ------------- */
    // Related State
    const [isClientShowing, setIsClientShowing] = useState(false)
    const [isTeamShowing, setIsTeamShowing] = useState(false)
    const [isEmployeeShowing, setIsEmployeeShowing] = useState(false)

    // Show Ticket Details
    function makeClientActive() {
        setIsClientShowing(prevCheck => !prevCheck)
        setIsTeamShowing(false);
        setIsEmployeeShowing(false);
    }

    // Show Client Details
    function makeTeamActive() {
        setIsTeamShowing(prevCheck => !prevCheck)
        setIsClientShowing(false);
        setIsEmployeeShowing(false);
    }

    // Show Client Details
    function makeEmployeeActive() {
        setIsEmployeeShowing(prevCheck => !prevCheck)
        setIsClientShowing(false);
        setIsTeamShowing(false);
    }

    /* ----------------------------- Component Logic ---------------------------- */

    function getTeams() {
        API.getAllOrgTeams()
            .then(res => {
                console.log("==============");
                console.log(res.data);
                setTeams(res.data)
            }).catch((err) => {
                console.log(err);
            })

    }

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

        // Handle Button Color
        if (e.target.id === "client") {
            makeClientActive();
        }
        else if (e.target.id === "team") {
            makeTeamActive()
        }
        else if (e.target.id === "emp") {
            makeEmployeeActive();
        }

        // Handle Form Display
        let temp = { ...visible }

        if (temp[e.target.id]) {
            temp = _.mapObject({ ...visible }, () => false)
        } else {
            temp = _.mapObject({ ...visible }, () => false)
            temp[e.target.id] = true
        }

        // Clear info div
        updateError("info", {});

        // Grab Team Data
        getTeams();

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

        const zipReg = new RegExp('^[0-9]+$');
        const phoneReg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
            && zipReg.test(refZip.current.value)
            && (refZip.current.value.length === 5)
            && phoneReg.test(refPhone.current.value)
            && emailReg.test(refEmail.current.value)
        ) {

            // Send input data to server for creation
            API.createNewClient(newClient)
                .then(res => {
                    updateError("info", { message: "New client successfully created!" })
                })
                .catch(err => {
                    updateError("error", JSON.parse(err.response.request.response).errors[0])
                    console.log(err)
                });
        } else {
            updateError("error", { message: "Please enter info into all fields and ensure proper formatting..." })
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
    let refTeamSelected = React.createRef();
    let refIsManager = React.createRef();

    // Handle New Employee Form
    const handleNewEmpSubmit = (e) => {
        e.preventDefault();

        console.log(refTeamSelected.current.value);

        const newEmployee = {
            first_name: refEmpFirstName.current.value,
            last_name: refEmpLastName.current.value,
            phone_number: refEmpPhone.current.value,
            email: refEmpEmail.current.value,
            team_id: refTeamSelected.current.value,
            role: "Employee",
            is_manager: refIsManager.current.value
        }

        if (refEmpFirstName.current.value
            && refEmpLastName.current.value
            && refEmpEmail.current.value
            && refEmpPhone.current.value
        ) {
            API.creatNewEmployee(newEmployee)
                .then(res => {
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

            <Container className="m-3 mt-3">
                <Row className="mt-3">
                    <Col className="col-lg-8 mx-auto divvy-bg-tile shadow p-0">
                        <Row className="mb-3">
                            <Col className="p-0">
                                <SectionHeader>{org.org.name}</SectionHeader>
                                <div class="form-text text-center">Select an option</div>
                            </Col>
                        </Row>
                        <Row className="mb-3 d-flex justify-content-center">
                            <Col className="text-center col-lg-3">
                                <div>
                                    <button id="client" onClick={handleCreateClick} className={isClientShowing ? "btn alert-warning btn text-center" : "btn btn-light btn text-center"}>New Client</button>
                                </div>
                            </Col>
                            <Col className="text-center col-lg-3">
                                <div>
                                    <button id="team" onClick={handleCreateClick} className={isTeamShowing ? "btn alert-warning btn text-center" : "btn btn-light btn text-center"}>New Team</button>
                                </div>
                            </Col>
                            <Col className="text-center col-lg-3">
                                <div>
                                    <button id="emp" onClick={handleCreateClick} className={isEmployeeShowing ? "btn alert-warning btn text-center" : "btn btn-light btn text-center"}>New Employee</button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                                    teams={teams}
                                    refTeamSelected={refTeamSelected}
                                    refIsManager={refIsManager}
                                /> : null}
                                {error.visible ? <div className={`mb-2 text-center text-${error.color}`} >{error.message}</div> : <div className="mb-2 text-center"></div>}
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