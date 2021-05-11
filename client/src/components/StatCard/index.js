/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function StartCard (props) {
        return (
            <div className="card col-3 m-2 text-center float-left px-0" data-component="employeecard">
            <div className="card-body p-1">
                <h4 className="card-text">{props.title}</h4>
                <p className="card-text">{props.amount}</p>
            </div>
        </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StartCard;