/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import EmployeeCard from "../EmployeeCard";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    /*
        Idea having this container component that wraps them in center can make
        it easy to map through an employee array and create the cards. 
        I put a few in just to see how the wrap woudl look
    */

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