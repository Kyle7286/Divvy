/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";  
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import TicketTable from "../components/TicketTable";
    import SectionHeader from "../components/SectionHeader";
    import StatCard from "../components/StatCard";
    import EmployeeCardContainer from "../components/EmployeeCardContainer";


   
/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    /*
        This page component will render all our stuff below it within the bs container
        class for spacing. This is our whitespace for making the UI alongside
        the navbar. 
    */

    function Home(){
         return (
            <Container>
                <Row className="mb-4 d-flex flex-row justify-content-center">
                    <StatCard/>
                    <StatCard/>
                    <StatCard/>
                    <StatCard/>
                </Row>
                <Row>
                    <Col className="col-lg-8 mx-0 p-0">
                        <SectionHeader>
                            Open Tickets
                        </SectionHeader>
                        <TicketTable/>
                    </Col>
                    <Col className="col-lg-4 align-items-center">
                        <SectionHeader>
                            Availible Employees
                        </SectionHeader>
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