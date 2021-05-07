/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function StartCard (props) {
        return (
            <div class="card shadow-sm col-2 mx-3 text-center">
                <div class="card-body">
                    <h5 class="card-title">Stat Card Title</h5>
                    <p class="card-text">Stat Card Value</p>
                    <a href="#" class="btn btn-sm btn-info">Manage</a>
                </div>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StartCard;