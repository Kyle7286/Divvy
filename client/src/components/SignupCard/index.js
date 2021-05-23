/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { Form, Button, Col } from 'react-bootstrap';
import API from "../../utils/API";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function SignupCard() {

    // Define references and general variables for values on update
    let firstName = React.createRef();
    let lastName = React.createRef();
    let orgName = React.createRef();
    let phoneNumber = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let orgID;

    function signup(event) {
        event.preventDefault();
        createOrg();
    }

    function createOrg() {

        const newOrg =
        {
            name: orgName.current.value
        }

        // Validate inputs and make API Call
        if (newOrg.name != null) {
            // Make the API call to post a new org
            API.newOrg(newOrg)
                .then(res => {
                    console.log('axio post response', res.data.id);
                    orgID = res.data.id;
                    createUser(orgID);
                })
                .catch(err => console.log(err));
        }
        else {
            // If no org name entered, alert them and do not make API call
            alert("Please make sure you have entered your organization name!")
        };
    }

    function createUser(orgID) {

        const newUser =
        {
            org_id: orgID,
            first_name: firstName.current.value,
            last_name: lastName.current.value,
            phone_number: phoneNumber.current.value,
            email: email.current.value,
            password: password.current.value,
            is_manager: true,
            role: "Admin",
            profile_icon: ""
        }

        // Validate inputs and make API Call
        if (newUser.first_name != null ||
            newUser.last_name != null ||
            newUser.phone_number != null ||
            newUser.email != null ||
            newUser.password != null
        ) {
            // Make the API call to post a new org
            API.newUser(newUser)
                .then(res => console.log('axio post response', res.data))
                .then(res => {
                    API.login({ email: email.current.value, password: password.current.value })
                        .then(res => console.log('axio login post response', res.data))
                        .then(res => {
                            const emailOptions = 
                            {
                                to: email.current.value,
                                subject: "Welcome to DIVVY",
                                message: "You have just signed up - Welcome!"
                            }
                            sendWelcomeEmail(emailOptions);
                        })
                        // .then(res => window.location = '/org')
                        .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        }
        else {
            // If no org name entered, alert them and do not make API call
            alert("Please make sure you have entered all the required fields!")
        };
    }

    function sendWelcomeEmail(emailOptions) {
        API.sendEmail(emailOptions)
                .then(res => console.log('axio email post response', res.data))
                .then(res => window.location = '/org')
                .catch(err => console.log(err));
    }

    return (
        <Form>
            <Form.Group controlId="formOrgName">
                <Form.Row>
                    <Col xs={6}>
                        <h3 className="text-center">Signup</h3>
                        <Form.Control ref={orgName} placeholder="Organization name" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Row>
                    <Col xs={3}>
                        <Form.Control ref={firstName} placeholder="First name" />
                    </Col>
                    <Col xs={3}>
                        <Form.Control ref={lastName} placeholder="Last name" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
                <Form.Row>
                    <Col xs={6}>
                        <Form.Control ref={phoneNumber} placeholder="Phone Number" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Row>
                    <Col xs={6}>
                        <Form.Control ref={email} type="email" placeholder="Enter email" autoComplete="username" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Row>
                    <Col xs={6}>
                        <Form.Control ref={password} type="password" placeholder="Password" autoComplete="current-password" />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formBasicSubmit">
                <Form.Row>
                    <Col xs={6}>
                        <center>
                            <Button variant="primary" type="submit" className="text-center" block onClick={signup}>
                                Submit
                                </Button>
                        </center>
                    </Col>
                </Form.Row>
            </Form.Group>
        </Form>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default SignupCard;