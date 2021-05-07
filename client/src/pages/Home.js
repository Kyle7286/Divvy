/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";  
    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";

   
/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Home(){
        
         return (
            <Container>
                 <Row>
                    <Col>
                      Insert page content and sub rows and cols here (Home Component on home.js) 
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