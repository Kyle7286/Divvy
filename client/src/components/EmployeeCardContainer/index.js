/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import EmployeeCard from "../EmployeeCard";
import API from "../../utils/API";
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function EmployeeCardContainer(props) {




    // const [user, setUser] = useState([]);

    // // Call when components have loaded
    // useEffect(() => {
    //     getUserTeamid(props);
    // }, [])

    // // Set the user state
    // function getUserTeamid(x) {
    //     API.getCurrentUser()
    //         .then(res => {
    //             console.log("CURRENT USER", res.data);
    //             console.log("X", x);


    //             const teamEmployees = x.allUsers.filter(user => {
    //                console.log("FILTERING");
    //                 return user.team_id === res.data.team_id
    //             });

    //             console.log("TEAM EMPLOYEES",teamEmployees);
                
    //             // setUser(teamEmployees);
    //         })
    //         .catch(err => console.log(err));
    // };


    function filterTeamEmployees() {
        // Take all users and filter it to employees
        const allEmployees = props.allUsers.filter(user => user.role != "Client");

        // Soort employees by their ticket count (due to mounting, make sure its not blank first)
        if (allEmployees.length != 0) {
            allEmployees.sort((a, b) => (a.ticketuser.length > b.ticketuser.length ? 1 : -1));
        };
        console.log("allEmployees: ", allEmployees)
        return allEmployees;
    }



    // Render the Component by mapping employees and rending sub compoennt in container
    return (
        <div className="bg-light">
            <SectionHeader>Availible Employees</SectionHeader>
            <div className="d-flex flex-wrap justify-content-center">
                {filterTeamEmployees().map((employee, index) => {
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