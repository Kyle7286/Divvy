/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import EmployeeCard from "../EmployeeCard";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function EmployeeCardContainer () {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
                <EmployeeCard/>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default EmployeeCardContainer;