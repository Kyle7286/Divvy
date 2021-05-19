/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Column";
import TicketTable from "../../components/TicketTable";
import TicketTableMobile from "../../components/TicketTableMobile";
import SectionHeader from "../../components/SectionHeader";
import EmployeeCardContainer from "../../components/EmployeeCardContainer";
import StatCardContainer from "../../components/StatCardContainer";
import { useMediaQuery } from 'react-responsive';
import API from "../../utils/API";


/* -------------------------------------------------------------------------- */
/*                           Set Mobile BreakPoints                           */
/* -------------------------------------------------------------------------- */

// Will render mobile friendly nav, horizontal with diff layout
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1025 })
    return isMobile ? children : null
}

// Will render desktop friendly nav, vertical nav
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 1026 })
    return isNotMobile ? children : null
}

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

function Dashboard() {

    /* ---------------------------------- Set State --------------------------------- */
    // Set tickets
    const [tickets, setTickets] = useState([
        {
            client: {
                contact: []
            }
        }
    ])
    // Set users
    const [users, setUsers] = useState([{}])
    // Set users
    const [clients, setClients] = useState([{}])

    /* --------------------------------- Get Tickets -------------------------------- */

    // Load all tickets and store them in tickets

    // Call when components have loaded
    useEffect(() => {
        getTickets()
    }, [])

    // Load All Tickets and Set Them to state
    function getTickets() {
        API.getAllTickets()
            .then(res => {
                console.log("TICKETS", res.data);
                setTickets(res.data)
            }
            )
            .catch(err => console.log(err));
    };

    /* -------------------------------- Get Users---------------------------------- */

    // Load all employees and store them in employees

    // Call when components have loaded
    useEffect(() => {
        getUsers();

    }, [])


    // Load all USERS
    function getUsers() {
        API.getAllUsers()
            .then(res => {
                console.log("RES.DATA", res.data);
                getUserTeamid(res.data)
            })
            .catch(err => console.log(err));
    }

    // Set the user state
    function getUserTeamid(x) {
        API.getCurrentUser()
            .then(res => {
                console.log("CURRENT USER", res.data);
                console.log("X", x);

                const teamEmployees = x.filter(user => {
                    // console.log("FILTERING");
                    return user.team_id === res.data.team_id
                });

                console.log("TEAM EMPLOYEES", teamEmployees);

                setUsers(teamEmployees);
            })
            .catch(err => console.log(err));
    };

    function sortEmployeesByTickets() {

        // Take all users and filter it to employees
        const allEmployees = props.allUsers.filter(user => user.role != "Client");

        // Soort employees by their ticket count (due to mounting, make sure its not blank first)
        if (allEmployees.length != 0) {
            allEmployees.sort((a, b) => (a.ticketuser.length > b.ticketuser.length ? 1 : -1));
        };

        return allEmployees;
    }

    /* -------------------------------- Get Clients ---------------------------------- */

    // Load all clients and store them in clients

    // Call when components have loaded
    useEffect(() => {
        getClients();

    }, [])


    // Load all USERS
    function getClients() {
        API.getAllClients()
            .then(res =>
                setClients(res.data)
            )
            .catch(err => console.log(err));
    }

    /* ---------------------------- Component Render ---------------------------- */
    return (


        <Container className="mx-3 mt-3">
            <Row className="mb-4 d-flex flex-row justify-content-center">
                <Col>
                    <StatCardContainer
                        allTickets={tickets}
                    />
                </Col>
            </Row>
            { <Row>
                <Col className="col-lg-8 mx-0 px-0">
                    <SectionHeader>Tickets</SectionHeader>
                    <Default>
                        <TicketTable
                            allTickets={tickets}
                            allUsers={users}
                            allClients={clients}
                        />
                    </Default>
                    <Mobile>
                        <TicketTableMobile
                            allTickets={tickets}
                            allUsers={users}
                            allClients={clients}
                        />
                    </Mobile>
                </Col>
                <Col className="col-lg-4 align-items-center">
                    <SectionHeader>Availible Employees</SectionHeader>
                    <EmployeeCardContainer
                        allUsers={users}
                    />
                </Col>
            </Row>}
        </Container>
    );
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Dashboard;