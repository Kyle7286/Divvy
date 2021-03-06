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
            <div class="col-md-8 mx-auto mt-5">
                <div class="card px-0 shadow">
                    <h5 class="text-warning py-4 fw-bold fs-4 text-center">Current User Login</h5>
                    <div class="card-body pt-0">
                        <form>
                            <div class="row mb-3">
                                <div class="col-sm-10 mx-auto">
                                    <input id="inputEmail" placeholder="email" type="email" class="form-control" autoComplete="email" id="email-login"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-10 mx-auto">
                                    <input id="inputPassword" placeholder="password" type="password" class="form-control" autoComplete="current-password" id="password-login"/>
                                </div>
                            </div>
                            <div class="text-center">
                                <button id="log-in-button" type="submit" onClick={props.handleFormSubmit} class="btn btn-primary">Login</button>
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