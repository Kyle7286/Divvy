/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import "../../index.css";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function StatCard(props) {
    return (
        <div tag="a" onClick={props.handleClick} data-vl={props.title} id={props.title} data-type="Status" style={{ cursor: "pointer" }} className="card col-3 mx-1 shadow mb-3 text-center float-left px-0" data-component="employeecard">
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