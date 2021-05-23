/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

   /* <div className="card col-3 m-1 text-center float-left px-0" data-component="employeecard">
            <div className="card-header">
                <p className="card-text"> Welcome to Divvy!</p>
            </div>
            <div className="card-body p-1">
                <button className="btn btn-lg btn-outline-success" variant="primary" onClick={loginClickHandle}>
                   Login
                </button>
                <p className="card-text align-middle">
                    <a className="forgotPasswordLink" href="/#">Forgot password  </a>
                    |
                    <a className="signupLink" href="/signup">  Click here to Sign-Up</a>
                </p>
            </div>
        </div> */

function HomePageCard(props) {

    let history = useHistory();

    function loginClickHandle() {
        history.push("/login");
    }

    return (
        <>
            <div className="card col-lg-6 mx-auto px-0 shadow-lg mt-5">
                <div className="card-header bg-dark text-white px-3 text-center fw-bold fs-3">
                    Welcome to Divvy!
                </div>
                <div className="text-center">
                    <div className="my-3">
                        <button className="btn btn btn-outline-warning" variant="primary" onClick={loginClickHandle}>
                            Login
                        </button>
                    </div>
                    <div className="my-3">
                        <a className="forgotPasswordLink divvy-link fs-5" href="/#">Forgot password</a>
                    </div>
                    <div className="my-3">
                        <a className="signupLink divvy-link fs-5" href="/signup">Sign-Up</a>
                    </div>
                </div>
            </div>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default HomePageCard;