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

    /*
        This page component will render all our stuff below it within the bs container
        class for spacing. This is our whitespace for making the UI alongside
        the navbar. 
    */

    function Home(){

        // Set the initial state of the component
        const [tickets, setTickets] = useState({})

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

            // FUTURE: DELETE TICKET

            // FUTURE: CREATE TICKET


        // Returning the component for rendering within App.js pasing all tickets as props
         return (
            <Container>
                <Row className="mb-4 d-flex flex-row justify-content-center">
                   <Col>
                        <StatCardContainer/>
                   </Col>
                </Row>
                <Row>
                    <Col className="col-lg-8 mx-0 p-0">
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
                        <EmployeeCardContainer/>
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