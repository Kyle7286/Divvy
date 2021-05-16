/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import EmployeeCard from "../EmployeeCard";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function EmployeeCardContainer (props) {
        
        // Take all users and filter it to employees
        const allEmployees = props.allUsers.filter(user=> user.role!="Client");

        // Soort employees by their ticket count (due to mounting, make sure its not blank first)
        if (allEmployees.length!=0) {
            allEmployees.sort((a,b) => (a.ticketuser.length > b.ticketuser.length ? 1 : -1));
        };
            
        // Render the Component by mapping employees and rending sub compoennt in container
        return (
           
            <div className="d-flex flex-wrap justify-content-center">
                 {allEmployees.map(employee => (
                     <EmployeeCard
                        key = {employee.id}
                        employeeName={`${employee.first_name} ${employee.last_name}`}
                        employeeTickets={employee.ticketuser.length ? ("Tickets: " + employee.ticketuser.length) : ("Tickets: 0")}
                     />
                ))}
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default EmployeeCardContainer;