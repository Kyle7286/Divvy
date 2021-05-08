/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import { Link, useLocation } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function Navbar() {

        const location=useLocation();

        return (
            <nav className="navbar flex-column bg-dark navbar-expand-lg navbar-dark vh-100" data-component="Navbar">
                <div>
                    <a className="navbar-brand mx-auto" href="/">Divvy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-column" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item px-0 border-left my-2 text-center" href="/">
                                <Link to="/" className={location.pathname==="/" || location.pathname==="" ? "nav-link active ps-2" : "nav-link ps-2"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg>
                                    <div>
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className=" nav-item border-left my-2 text-center">
                                <Link to="/" className={location.pathname==="/" || location.pathname==="" ? "nav-link active ps-2" : "nav-link ps-2"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                    </svg>
                                    <div>
                                        Team
                                    </div>
                                </Link>
                            </li>
                            <li  className=" nav-item border-left my-2 text-center">
                                <Link to="/" className={location.pathname==="/" || location.pathname==="" ? "nav-link active ps-2" : "nav-link ps-2"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                    <div>
                                        Profile
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Navbar;

/* -------------------------------------------------------------------------- */
/*                                Original Nav                               */
/* -------------------------------------------------------------------------- */

    // Left my original in to ref how to setup with location later. will remove when done

    /*

        function Navbar() {

            const location=useLocation();

            return (
                <nav className="navbar myNavBg navbar-expand-lg navbar-dark p-3 mb-3 border-3 border-bottom border-secondary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">App Name</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" href="/">
                                    <Link to="/" className={location.pathname==="/" || location.pathname==="" ? "nav-link active" : "nav-link"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item" href="/portfolio">
                                    <Link to="/portfolio" className={location.pathname==="/portfolio" ? "nav-link active" : "nav-link"}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="nav-item" href="/contact">
                                    <Link to="/contact" className={location.pathname==="/contact" ? "nav-link active" : "nav-link"}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }

    */