/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function StatCard(props) {
    return (
<<<<<<< HEAD
        <div tag="a" onClick={props.handleClick} data-vl={props.title} data-type="Status" style={{ cursor: "pointer" }} className="card shadow col-3 mx-1 text-center float-left px-0" data-component="employeecard">
=======
        <div tag="a" onClick={props.handleClick} data-vl={props.title} id={props.title} data-type="Status" style={{ cursor: "pointer" }} className="card col-4 mb-3 text-center float-left px-0" data-component="employeecard">
>>>>>>> 3b01473d92825a283cbbbc7e718a1b07976d4455
            <div className="card-body p-1" data-vl={props.title} data-type="Status">
                <h6 className="card-text fw-bold" data-vl={props.title} data-type="Status">{props.title}</h6>
                <p className="card-text" data-vl={props.title} data-type="Status">{props.amount}</p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default StatCard;