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
            <div className="col-md-8 mx-auto mt-5">
                <div className="card px-0 shadow">
                    <h5 className="card-header bg-dark text-white text-center">Current User Login</h5>
                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input id="inputEmail" type="email" className="form-control" autoComplete="email" id="email-login"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input id="inputPassword" type="password" className="form-control" autoComplete="current-password" id="password-login"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button id="log-in-button" type="submit" onClick={props.handleFormSubmit} className="btn btn-warning">Login</button>
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