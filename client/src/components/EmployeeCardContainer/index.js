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
import { Badge } from "react-bootstrap";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function EmployeeCardContainer(props) {

    // Declare a global variable for this container all Employees
    let allEmployees;

    // Declare a function to sort employees
    function filterTeamEmployees() {
        // Take all users and filter it to employees
        allEmployees = props.allUsers.filter(user => user.role != "Client");;
        if (allEmployees.length > 1) {
            allEmployees = allEmployees.map((element) => {
                return {...element, ticketuser: element.ticketuser.filter((ticketuser) => ticketuser.status != "Completed")}
              })
        }

        // Sort employees by their ticket count (due to mounting, make sure its not blank first)
        if (allEmployees.length != 0) {
            allEmployees.sort((a, b) => (a.ticketuser.length > b.ticketuser.length ? 1 : -1));
        };
    }

    // Invoke the function to sort and filter employees
    filterTeamEmployees()

    
    // Declare a functoin for setting ticket colors on the profile cards by index of map (position they are in the sort) - SAVING AS BACKUP
        /*
            function setBadgeColor (index) {
                if (index <3) {
                    return "badge alert-success"
                } 
                else if (index > 2 && index < 6) {
                return "badge alert-info"
                }
                else if (index > 5 && index < 9) {
                    return "badge alert-warning"
                }
                else if (index > 8) {
                    return "badge alert-secondary"
                }
                else {
                    return "badge alert-light"
                }
            };
        */

    function setBadgeColorByWeight (ticketsNotClosed, employeeTickets ) {

        // Determine weight of total ticket count
        const weight = employeeTickets/ticketsNotClosed;
        
        // Set badge color based on weights
        if (weight <0.15) {
            return "badge alert-success"
        } 
        else if (weight> 0.14 && weight < 0.25) {
           return "badge alert-info"
        }
        else if (weight > 0.24 && weight < 0.50) {
            return "badge alert-warning"
        }
        else if (weight > 0.49) {
            return "badge alert-danger"
        }
        else {
            return "badge alert-light"
        }
    };

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
                            employeeTickets={employee.ticketuser ? (`Tickets (${employee.ticketuser.length})`) : ("Tickets (0)")}
                            className={employee.ticketuser ? (setBadgeColorByWeight(props.activeTicketCount, employee.ticketuser.length)) : ("badge alert-success")}
                            //className={setBadgeColor(index)} - saving this as backup in case we want to use this sorter function
                            employeeID={employee.id}
                            profileIcon={employee.profile_icon}
                            handleClick={props.handleClick}
                        />
                    ) :
                        <EmployeeCard
                            key={employee.id}
                            employeeName={`${employee.first_name} ${employee.last_name}`}
                            employeeTickets={employee.ticketuser ? (`Tickets (${employee.ticketuser.length})`) : ("Tickets (0)")}
                            className={employee.ticketuser ? (setBadgeColorByWeight(props.activeTicketCount, employee.ticketuser.length)) : ("badge alert-success")}
                            //className={setBadgeColor(index)} - saving this as backup in case we want to use this sorter function
                            employeeID={employee.id}
                            profileIcon={employee.profile_icon}
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