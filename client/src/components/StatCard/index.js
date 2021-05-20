/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function StatCard(props) {
    return (
        <div tag="a" style={{ cursor: "pointer" }} className="card col-4 mb-3 text-center float-left px-0" data-component="employeecard">
            <div className="card-body p-1">
                <h6 className="card-text fw-bold">{props.title}</h6>
                <p className="card-text">{props.amount}</p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default StatCard;