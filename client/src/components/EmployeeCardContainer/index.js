/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import EmployeeCard from "../EmployeeCard";
import API from "../../utils/API";
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import "./index.css"; 
import "../../index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function EmployeeCardContainer(props) {

    // Declare a global variable for this container all Employees
    let allEmployees;

    // Declare a function to sort all of them
    function filterTeamEmployees() {
        // Take all users and filter it to employees
        allEmployees = props.allUsers.filter(user => user.role != "Client");

        // Soort employees by their ticket count (due to mounting, make sure its not blank first)
        if (allEmployees.length != 0) {
            allEmployees.sort((a, b) => (a.ticketuser.length > b.ticketuser.length ? 1 : -1));
        };

    }

    // Invoke the function to sort and filter employees
    filterTeamEmployees()

    // Render the Component by mapping employees and rending sub compoennt in container
    return (
        <div className="divvy-bg-tile fix-height overflow-auto">
            <SectionHeader>Available Employees</SectionHeader>
            <div className="d-flex flex-wrap justify-content-center">
                {allEmployees.map((employee, index) => {
                    return index < 3 ? (
                        <EmployeeCard
                            key={employee.id}
                            employeeName={`${employee.first_name} ${employee.last_name}`}
                            employeeTickets={employee.ticketuser ? ("Tickets: " + employee.ticketuser.length) : ("Tickets: 0")}
                            className="card-body p-1 alert-success"
                            employeeID={employee.id}
                            handleClick={props.handleClick}
                        />
                    ) :
                        <EmployeeCard
                            key={employee.id}
                            employeeName={`${employee.first_name} ${employee.last_name}`}
                            employeeTickets={employee.ticketuser ? ("Tickets: " + employee.ticketuser.length) : ("Tickets: 0")}
                            className="card-body p-1"
                            employeeID={employee.id}
                            handleClick={props.handleClick}
                        />
                })}
            </div>
        </div>
        
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default EmployeeCardContainer;

//     {allEmployees.map(employee => (
//         <EmployeeCard
//            key = {employee.id}
//            employeeName={`${employee.first_name} ${employee.last_name}`}
//            employeeTickets={employee.ticketuser.length ? ("Tickets: " + employee.ticketuser.length) : ("Tickets: 0")}
//         />
//    ))}