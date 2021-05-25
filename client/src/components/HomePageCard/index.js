/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";
import Image from "./divvy-bg-img.PNG";
import SectionHeader from "../SectionHeader";

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
        <div>
            <div className="divvy-bg-tile mt-5 col-lg-10 p-0 mx-auto">
                <SectionHeader>Welcome! </SectionHeader>
                <div className="justify-content-center py-2 px-3 text-center fs-6">
                    <div>
                    Pleasing clients is hard. Doing it while not overstressing your team, or yourself is even harder. Divvy provides a simple, 
                    minimalisitc ticket-based system for teams and clients to collaborate within. 
                    </div> 
                </div>
                <div className="my-2">
                    <div className="divvy-font-logo text-danger fs-3 text-center">Key Features</div>
                    <div className="px-0 col-10 text-left mx-auto">
                        <ul className="list-group">
                            <li>
                                <span className="text-danger fw-bold">Manage Dashboard - </span>
                                Simple dashboard for ticket creation and management
                            </li>
                            <li>
                                <span className="text-danger fw-bold">Capacity Visulization - </span>
                                Intelligent sorting of availible team members to help capacity distribution at all times
                            </li>
                            <li>
                                <span className="text-danger fw-bold">Multi-Tier Search and Filter - </span>
                                Multi-tiered sorting and filtering for enabling the view YOU need to best manage the workload
                            </li>
                            <li>
                                <span className="text-danger fw-bold">Rewards - </span>
                                Gamified rewards system to keep the working fun and the hard working recognized
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="justify-content-center py-3 px-3 text-center">
                    <div className="fw-bold py-2">
                        Dont let the busy win. 
                    </div> 
                    <div className="divvy-font-logo fs-4 text-danger">
                        Lets Divvy.
                    </div>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default HomePageCard;