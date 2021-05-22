/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Column";
import TicketTable from "../../components/TicketTable";
import TicketTableMobile from "../../components/TicketTableMobile";
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

    // set current user
    const [currentUser, setCurrentUser] = useState({})

    // Set users
    const [users, setUsers] = useState([{}])

    // Set clients
    const [clients, setClients] = useState([{}])

    // set total ticket count
    const [countTicketTotal, setCountTicketTotal] = useState()

    // set open ticket count
    const [countTicketOpen, setCountTicketOpen] = useState()

    // set unassigned ticket count
    const [countTicketUnassigned, setCountTicketUnassigned] = useState()

    // set tickets not closed count (so in progress, assigned, open)
    const [countTicketNotClosed, setCountTicketNotClosed] = useState()
    /* --------------------------------- Get Tickets -------------------------------- */

    // Declare global variables
    let unassignedTicketCount = 0;
    let openTicketCount = 0;
    let ticketsNotClosedCount = 0;

    // Call when components have loaded
    useEffect(() => {
        const filterType = "ALL"
        const filterValue = null
        getTickets(filterType, filterValue)
    }, [])

    // Load All Tickets and Set Them to state
    function getTickets(filterType, filterValue) {
        API.getAllTickets()
            .then(res => {
                console.log("TICKETS", res.data);
                
                // Create counters for StatCard
                const totalTickets = res.data;
                let totalTicketCount = totalTickets.length;
                setCountTicketTotal(totalTicketCount);
                let ticketsNotClosed = totalTickets.filter(ticket=>ticket.status!="Closed");
                ticketsNotClosedCount = ticketsNotClosed.length;
                setCountTicketNotClosed(ticketsNotClosed);
                let openTickets = totalTickets.filter(ticket => ticket.status == "Open");
                openTicketCount = openTickets.length;
                setCountTicketOpen(openTicketCount);
                let unassignedTickets = totalTickets.filter(ticket => ticket.assigned_to === null && ticket.status != "Completed");
                unassignedTicketCount = unassignedTickets.length;
                setCountTicketUnassigned(unassignedTicketCount);

                let filteredTickets;
                switch (filterType) {
                    case "ID":
                        filteredTickets = res.data.filter(ticketsData => {
                            return ticketsData.assigned_to === filterValue;
                        });
                        break;
                    case "Status":
                        filteredTickets = res.data.filter(ticketsData => {
                            return ticketsData.status === filterValue;
                        });
                        break;
                    default:
                        filteredTickets = res.data;
                        break;
                }

                //console.log("filteredTickets: ", filteredTickets);

                setTickets(filteredTickets);
            })
            .catch(err => console.log(err));
    };

    /* ---------------------------- Get Current User ---------------------------- */

    // Call when components have loaded
    useEffect(() => {
        getCurrentUser();
    }, [])

    // Set current User State
    function getCurrentUser() {
        API.getCurrentUser()
            .then(res => {
                console.log("CURRENT USER", res.data);
                setCurrentUser(res.data);
            }
            )
    }


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
                //console.log("RES.DATA", res.data);
                getUserTeamid(res.data)
            })
            .catch(err => console.log(err));
    }

    // Set the user state
    function getUserTeamid(x) {
        API.getCurrentUser()
            .then(res => {
                // console.log("CURRENT USER", res.data);
                // console.log("X", x);

                const teamEmployees = x.filter(user => {
                    // console.log("FILTERING");
                    return user.team_id === res.data.team_id
                });

                //console.log("TEAM EMPLOYEES", teamEmployees);

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
    };

    /* -------------------------------- handleClick ---------------------------------- */

    function handleClick(e) {
        let filterValue = e.target.dataset.vl;
        let filterType = e.target.dataset.type;
        document.getElementById("Total").style.borderColor = "";
        document.getElementById("Open").style.borderColor = "";
        document.getElementById("Unassigned").style.borderColor = "";
        const employeeCards = document.querySelectorAll(".employeecard");
        for (let index = 0; index < employeeCards.length; index++) {
            employeeCards[index].style.borderColor = "";
        };
        switch (filterType) {
            case "Status":
                document.getElementById(filterValue).style.borderColor = "rgb(255,193,7)";
                switch (filterValue) {
                    case "Total":
                        filterType = "All";
                        break;
                    case "Open":
                        break;
                    case "Unassigned":
                        filterType = "ID";
                        filterValue = null;
                        break;
                    default:
                        break;
                }
                getTickets(filterType, filterValue);
                break;
            case "ID":

                document.getElementById(filterValue).style.borderColor = "rgb(255,193,7)";
                filterValue = parseInt(filterValue);
                getTickets(filterType, filterValue);
                break;
            default:
                break;
        }
    };

    /* ------------ Check For Client User Role For Conditional Render ----------- */
        function checkClient() {
            if (currentUser.role!="Client") {
                return (
                    <Col className="col-lg-4 align-items-center">
                        <EmployeeCardContainer
                            allUsers={users}
                            ticketsNotClosed = {countTicketNotClosed}
                            handleClick={handleClick}
                        />
                    </Col>  
                )
            }
            else {
                return;
            }
        };

    /* ---------------------------- Component Render ---------------------------- */
    return (
            <Container className=" mt-3 mx-3">
                <Row>
                    <Col className={currentUser.role!="Client" ? "col-lg-8 mx-auto px-0" : "col-lg-11 mx-auto px-0" }> 
                        <StatCardContainer
                            allTickets={tickets}
                            totalTicketCount={countTicketTotal}
                            openTicketCount={countTicketOpen}
                            unassignedTicketCount={countTicketUnassigned}
                            handleClick={handleClick}
                    />
                        <Default>
                            <TicketTable
                                allTickets={tickets}
                                allUsers={users}
                                allClients={clients}
                                currentUser={currentUser}
                            />
                            </Default>
                        <Mobile>
                            <TicketTableMobile
                                allTickets={tickets}
                                allUsers={users}
                                allClients={clients}
                                currentUser={currentUser}
                            />
                        </Mobile>
                    </Col>
                    {
                      checkClient()
                    }
                    {/* <Col className="col-lg-4 align-items-center">
                        <EmployeeCardContainer
                            allUsers={users}
                            handleClick={handleClick}
                        />
                    </Col> */}
                </Row>
                <Row>
                    <div className="text-danger text-center divvy-font-logo fs-3 p-3">
                        Let's Divvy
                    </div>
                </Row>
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