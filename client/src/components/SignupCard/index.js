/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import API from "../../utils/API";
import "../../index.css";
import SectionHeader from "../SectionHeader";
import Row from "../Row";
import Col from "../Column";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function SignupCard() {

    const [error, setError] = useState({});

    // Call when components have loaded
    useEffect(() => {
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
                error.message = "Org name already in use!"
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

    // Define references and general variables for values on update
    let firstName = React.createRef();
    let lastName = React.createRef();
    let orgName = React.createRef();
    let phoneNumber = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let orgID;
    let inputEmail;
    let inputPassword;
    let userOrgID;

    function handleSignupSubmit(event) {
        event.preventDefault();

        inputEmail = email.current.value;
        inputPassword = password.current.value;

        const newOrg =
        {
            name: orgName.current.value
        }

        const newUser =
        {
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            phone_number: phoneNumber.current.value,
            email: email.current.value,
            password: password.current.value,
            is_manager: true,
            role: "Admin",
            profile_icon: ""
        }

        const phoneReg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // If you have filled out all the form fields...
        if (orgName.current.value
            && firstName.current.value
            && lastName.current.value
            && phoneNumber.current.value
            && email.current.value
            && password.current.value
            && phoneReg.test(phoneNumber.current.value)
            && emailReg.test(email.current.value)
        ) {
            // Send input data to server for creation
            // Clear info div
            updateError("info", {});
            createOrg(newOrg, newUser);
        } else {
            updateError("error", { message: "Please enter info into all fields and ensure proper formatting..." })
        }
    }

    function createOrg(newOrg, newUser) {

        // Make the API call to post a new org
        API.newOrg(newOrg)
            .then(res => {
                orgID = res.data.id;
                userOrgID = {org_id: orgID};
                newUser = {...newUser, ...userOrgID};
                createUser(newUser);
            })
            .catch(err => {
                updateError("error", JSON.parse(err.response.request.response).errors[0])
                console.log(err)
            });

    }

    function createUser(newUser) {
        // Make the API call to post a new org
        API.newUser(newUser)
            .then(res => {
                API.login({ email: inputEmail, password: inputPassword })
                    .then(res => {
                        const emailOptions =
                        {
                            to: inputEmail,
                            subject: "Welcome to DIVVY",
                            message: "You have just signed up - Welcome!"
                        }
                        sendWelcomeEmail(emailOptions);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                updateError("error", JSON.parse(err.response.request.response).errors[0])
                deleteOrg(userOrgID);
                console.log(err)
            });
    }

    function deleteOrg(userOrgID) {
        API.deleteOrg(userOrgID.org_id)
            .catch(err => console.log(err));
    }

    function sendWelcomeEmail(emailOptions) {
        API.sendEmail(emailOptions)
            .then(res => window.location = '/org')
            .catch(err => console.log(err));
    }

    return (
        <Row>
            <div className="card col-lg-6 mx-auto px-0 shadow-lg mt-5">
                <Form className="text-center">
                    <Form.Group className="mb-3 mx-2" controlId="formOrgName">
                        <Form.Row>
                            <Col xs={6}>
                                <SectionHeader>Signup</SectionHeader>
                                <Form.Control ref={orgName} placeholder="Organization name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicName">
                        <Form.Row>
                            <Col xs={3}>
                                <Form.Control ref={firstName} placeholder="First name" />
                            </Col>
                            <Col xs={3}>
                                <Form.Control ref={lastName} placeholder="Last name" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicPhone">
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Control ref={phoneNumber} placeholder="Phone Number" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Control ref={email} type="email" placeholder="Enter email" autoComplete="username" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicPassword">
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Control ref={password} type="password" placeholder="Password" autoComplete="current-password" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mx-2" controlId="formBasicSubmit">
                        <Form.Row>
                            <Col xs={6}>
                                <center>
                                    <Button variant="primary" type="submit" className="text-center" block onClick={handleSignupSubmit}>
                                        Submit
                                    </Button>
                                </center>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </Form>
                {error.visible ? <div className={`mb-2 text-center text-${error.color}`} >{error.message}</div> : <div className="mb-2 text-center"></div>}
            </div>
        </Row>

    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default SignupCard;