/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import StatCard from "../StatCard";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


    function StatCardContainer () {
        return (
            <div className="d-flex flex-wrap justify-content-center" data-component="StatCardContainer">
                <StatCard/>
                <StatCard/>
                <StatCard/>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StatCardContainer;