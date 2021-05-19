/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function HomePageCard(props) {

    let history = useHistory();

    function loginClickHandle() {
        history.push("/login");
    }

    return (
        <div className="card col-3 m-1 text-center float-left px-0" data-component="employeecard">
            <div className="card-header">
                <p className="card-text"></p>
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

        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default HomePageCard;