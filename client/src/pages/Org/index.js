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

    // Call when components have loaded
    useEffect(() => {
        getOrg();
    }, [])


    // Set the user state
    function getOrg() {
        API.getOrg()
            .then(res => {
                console.log(res.data);
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

        console.log("What");
        let temp = { ...visible }

        if (temp[e.target.id]) {
            temp = _.mapObject({ ...visible }, () => false)
        } else {
            temp = _.mapObject({ ...visible }, () => false)
            temp[e.target.id] = true
        }

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

    const handleNewClientSubmit = (e) => {
        e.preventDefault();

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

        API.createNewClient(newClient)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

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
                            // handleCreateClick={handleCreateClick}
                            /> : null}

                            {visible.emp ? <NewEmpForm
                            // handleCreateClick={handleCreateClick}
                            /> : null}


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