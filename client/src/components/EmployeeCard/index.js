/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function EmployeeCard(props) {
    //console.log("props: ", props);
    return (
        <div tag="a" onClick={props.handleClick} data-vl={props.employeeID} data-type="ID" style={{ cursor: "pointer" }} className="card col-3 m-1 text-center float-left px-0" data-component="employeecard">
            <div className="card-header" data-vl={props.employeeID} data-type="ID">
                <p className="card-text" data-vl={props.employeeID} data-type="ID">{props.employeeTickets}</p>
            </div>
            <div className={props.className} data-vl={props.employeeID} data-type="ID">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" data-vl={props.employeeID} data-type="ID">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" data-vl={props.employeeID} data-type="ID"/>
                </svg>
                <p className="card-text align-middle" data-vl={props.employeeID} data-type="ID">{props.employeeName}</p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default EmployeeCard;