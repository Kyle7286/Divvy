/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import TicketTable from "../components/TicketTable";
    import TicketTableMobile from "../components/TicketTableMobile";
    import SectionHeader from "../components/SectionHeader";
    import EmployeeCardContainer from "../components/EmployeeCardContainer";
    import StatCardContainer from "../components/StatCardContainer";
    import {useMediaQuery} from 'react-responsive';
    import API from "../utils/API";


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

    function Home(){

        /* ---------------------------------- State --------------------------------- */
            // Set tickets
            const [tickets, setTickets] = useState({})
            // Set users
            const [users, setUsers] = useState({})

        /* --------------------------------- Tickets -------------------------------- */

            // Load all tickets and store them in tickets

                // Call when components have loaded
                useEffect(() => {
                    getTickets()
                },[])

                // Load All Tickets and Set Them to state
                function getTickets () {
                    API.getAllTickets()
                        .then (res =>
                            setTickets(res.data)
                        )
                        .catch(err => console.log(err));
                };

        /* -------------------------------- Users---------------------------------- */
        
            // Load all employees and store them in employees

                // Call when components have loaded
                useEffect(() => {
                    getUsers()
                },[])

                // Load all USERS
                function getUsers () {
                    API.getAllUsers()
                        .then(res=>
                            setUsers(res.data)
                        )
                        .catch(err => console.log(err));
                }

                console.log('users state is', users);


        /* ---------------------------- Component Render ---------------------------- */
         return (
            
            <Container className="mx-2 mt-3">
                <Row className="mb-4 d-flex flex-row justify-content-center">
                    <Col>
                        <StatCardContainer
                            allTickets={tickets.length ? (tickets) : ([])}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-8 mx-0 px-0">
                        <SectionHeader>Open Tickets</SectionHeader>
                        <Default>
                            <TicketTable
                                allTickets={tickets.length ? (tickets) : ([])}
                            />
                        </Default>
                        <Mobile>
                            <TicketTableMobile
                                allTickets={tickets.length ? (tickets) : ([])}
                            />
                        </Mobile>
                    </Col>
                    <Col className="col-lg-4 align-items-center">
                            <SectionHeader>Availible Employees</SectionHeader>
                            <EmployeeCardContainer
                                allUsers={users.length ? (users) : ([])}
                            />
                    </Col>
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

    export default Home;