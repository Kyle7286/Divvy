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

    function EmployeeCardContainer (props) {
        // check props
        console.log('props.allUsers for employee card container', props.allUsers);

        // Take all users and filter it to employees
        const allEmployees = props.allUsers.filter(user=> user.role=="0" ||user.role=="1");
            console.log('filterd list of employees is', allEmployees);
 
        // Render the Component by mapping employees and rending sub compoennt in container
        return (
           
            <div className="d-flex flex-wrap justify-content-center">
                 {allEmployees.map(employee => (
                     <EmployeeCard
                        key = {employee.id}
                        employeeName={`${employee.first_name} ${employee.last_name}`}
                        employeeTickets="#Tks"
                     />
                ))}
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default EmployeeCardContainer;