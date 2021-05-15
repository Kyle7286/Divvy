/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function LoginCard(props) {

    return (
        <div className="card col-auto m-1 float-left px-0" data-component="logincard">
            <div className="card-body p-1">
                <h5 className="card-title">Login</h5>
                <form className="form login-form">
                    <div className="form-group">
                        <label htmlFor="email-login">email:</label>
                        <input className="form-input m-2" type="text" autoComplete="email" id="email-login" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password-login">password:</label>
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
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default LoginCard;