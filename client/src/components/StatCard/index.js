/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function StartCard (props) {
        return (
            <div className="card shadow-sm col-2 mx-3 text-center" data-component="statcard">
                <div className="card-body">
                    <h5 className="card-title">Stat Card Title</h5>
                    <p className="card-text">Stat Card Value</p>
                    <a href="#" className="btn btn-sm btn-info">Manage</a>
                </div>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StartCard;