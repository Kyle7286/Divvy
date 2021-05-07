/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";  
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import TicketTable from "../components/TicketTable";

   
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
                <Row className="mb-4">
                    This is the row we drop the summary stats
                </Row>
                <Row>
                    <Col className="col-8 mx-0 p-0">
                        <TicketTable/>
                    </Col>
                    <Col className="col-md-4">
                        This is the col we render employee cards sorted by capacity
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