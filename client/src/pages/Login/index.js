/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { Component } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Column";
import LoginCard from "../../components/LoginCard";
import { useMediaQuery } from 'react-responsive';
import API from "../../utils/API";


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

/*
    This page component will render all our stuff below it within the bs container
    class for spacing. This is our whitespace for making the UI alongside
    the navbar. 
*/

class Login extends Component {

    handleFormSubmit = event => {
        event.preventDefault();

        // Collect values from the login form
        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();

        if (email && password) {
            // Send a POST request to the API endpoint
            API.login({ email, password })
                .then(res => {
                    window.location = '/dashboard';
                }
                )
                .catch(err => {
                    console.log(err);
                    document.getElementById("message").innerHTML = err.response.data.message;
                }
                )
        }
    };

    render() {

        return (
            <div className="home-hero h-100">
                <div>
                    <Container>
                        <Row className="mb-4 d-flex flex-row justify-content-center">
                            <Col>
                                <LoginCard
                                    handleFormSubmit={this.handleFormSubmit}
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Login;