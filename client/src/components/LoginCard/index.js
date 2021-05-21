/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function LoginCard(props) {

    return (
        <>
        {/* <div className="card col-4 mx-auto float-left px-0" data-component="logincard">
            <div className="card-body p-1">
                <h5 className="card-title fw-bold">Login</h5>
                <form className="form login-form">
                    <div className="form-group">
                        <label htmlFor="email-login">Email</label>
                        <input className="form-input m-2" type="text" autoComplete="email" id="email-login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-login">Password</label>
                        <input className="form-input m-2" type="password" autoComplete="current-password" id="password-login" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={props.handleFormSubmit}>login</button>
                    </div>
                </form>
                <div>
                   <p style={{color:'red'}} id="message"></p> 
                </div>
            </div>
        </div> */}

        <div class="col-md-8 mx-auto mt-5">
            <div class="card px-0 shadow">
                <h5 class="card-header bg-dark text-white">Current User Login</h5>
                <div class="card-body">
                    <form>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input id="inputEmail" type="email" class="form-control" autoComplete="email" id="email-login"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input id="inputPassword" type="password" class="form-control" autoComplete="current-password" id="password-login"/>
                            </div>
                        </div>
                        <div class="text-center">
                            <button id="log-in-button" type="submit" onClick={props.handleFormSubmit} class="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <div className="text-center mt-2">
                        <p style={{color:'rgb(255, 193, 7)'}} id="message"></p> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default LoginCard;