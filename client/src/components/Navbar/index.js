/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import "./style.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/* ----Define Queries For Rendering Mobile Nav or Non-Mobile(default) Nav---- */


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

/* ------------- Define Main Nav Component (one mobile one not) ------------- */

function Navbar(props) {

    const { loggedIn } = props.loggedInStatus;

    function checkRole() {
        if (props.currentUser.role === "Admin" || props.currentUser.is_manager) {
            return (
                <li className=" nav-item my-2 text-center">
                    <NavLink to="/org" className="nav-link ps-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
                        </svg>
                        <div>
                            Organization
                </div>
                    </NavLink>
                </li>
            )
        }
        else {
            return;
        }
    };

    function checkRoleMobile() {
        if (props.currentUser.role === "Admin" || props.currentUser.is_manager) {
            return (
                <li className=" nav-item my-2 me-2 text-center">
                    <NavLink to="/org" className="nav-link ps-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
                        </svg>
                        <div>
                            Organization
                </div>
                    </NavLink>
                </li>
            )
        }
        else {
            return;
        }
    };

    return (
        <>
            {/*This is what will render below mobile breakpoint for navbar*/}
            < Mobile >
                <nav className="navbar bg-dark navbar-expand-lg navbar-dark" data-component="Navbar">
                    <div>
                        <button className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand mx-auto" href="/">Divvy</a>
                        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
                            <ul className="navbar-nav flex-row justify-content-center">
                                {!loggedIn ?
                                    <>
                                        <li className="nav-item px-0 my-2 text-center me-2" href="/">
                                            <NavLink to="/" exact={true} className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                </svg>
                                                <div>
                                                    Home
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center mr-2">
                                            <NavLink to="/login" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                </svg>
                                                <div>
                                                    Login
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center mr-2">
                                            <NavLink to="/signup" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                                                </svg>
                                                <div>
                                                    Signup
                                                </div>
                                            </NavLink>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item px-0 my-2 me-2 text-center" href="/dasboard">
                                            <NavLink to="/dashboard" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                                                    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                    <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                                </svg>
                                                <div>
                                                    Dashboard
                                            </div>
                                            </NavLink>
                                        </li>
                                        {checkRoleMobile()}
                                        {/* <li className=" nav-item my-2 text-center">
                                            <NavLink to="/org" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
                                                </svg>
                                                <div>
                                                    Org
                                            </div>
                                            </NavLink>
                                        </li> */}
                                        {/* <li className=" nav-item my-2 text-cente mr-4">
                                            <NavLink to="/team" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                </svg>
                                                <div>
                                                    Team
                                            </div>
                                            </NavLink>
                                        </li> */}
                                        <li className=" nav-item my-2 me-2 text-center mr-2">
                                            <NavLink to="/profile" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                                <div>
                                                    Profile
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center mr-2">
                                            <NavLink onClick={props.handleLogout} to="/logout" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                </svg>
                                                <div>
                                                    Logout
                                            </div>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </Mobile>

            {/*This is what will render above mobile breakpoint for navbar*/}
            <Default>
                <nav className="navbar flex-md-column bg-dark navbar-expand-lg navbar-dark pt-0 min-vh-100" data-component="Navbar">
                    <div>
                        <button className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="text-warning text-center fw-bold fst-italic fs-1 mt-2 divvy-font-logo">Divvy</div>
                        

                        <div className="collapse navbar-collapse flex-column" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                {!loggedIn ?
                                    <>
                                        <li className="nav-item px-0 my-2 text-center" href="/">
                                            <NavLink to="/" exact={true} className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                </svg>
                                                <div>
                                                    Home
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center">
                                            <NavLink to="/login" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                </svg>
                                                <div>
                                                    Login
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center">
                                            <NavLink to="/signup" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-down-right-square" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 3.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
                                                </svg>
                                                <div>
                                                    Signup
                                            </div>
                                            </NavLink>
                                        </li>
                                    </> :
                                    <>
                                        <li className="nav-item px-0 my-2 text-center" href="/dasboard">
                                            <NavLink to="/dashboard" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                                                    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                    <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                                </svg>
                                                <div>
                                                    Dashboard
                                        </div>
                                            </NavLink>
                                        </li>
                                        {checkRole()}
                                        {/* <li className=" nav-item my-2 text-center">
                                            <NavLink to="/org" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-diagram-3-fill" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z" />
                                                </svg>
                                                <div>
                                                    Org
                                            </div>
                                            </NavLink>
                                        </li> */}
                                        {/* <li className=" nav-item my-2 text-center">
                                            <NavLink to="/team" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                </svg>
                                                <div>
                                                    Team
                                            </div>
                                            </NavLink>
                                        </li> */}
                                        <li className=" nav-item my-2 text-center">
                                            <NavLink to="/profile" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                                <div>
                                                    Profile
                                            </div>
                                            </NavLink>
                                        </li>
                                        <li className=" nav-item my-2 text-center">
                                            <NavLink onClick={props.handleLogout} to="/logout" className="nav-link ps-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                                </svg>
                                                <div>
                                                    Logout
                                            </div>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                        {!loggedIn ?
                            <>
                                <div>
                                    {/* <p className="pt-5 logStatusInfo text-center text-white">Logged Out</p> */}
                                </div> </> :
                            <>
                                <div>
                                    <p className="logStatusInfo text-center text-white pb-2">
                                        Hello,
                                        <br></br>
                                        {props.currentUser.first_name} {props.currentUser.last_name}
                                    </p>
                                </div>
                            </>
                        }
                </nav>
            </Default>
        </>
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