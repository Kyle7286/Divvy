/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import Container from "../Container";
import Col from "../Column";
import Row from "../Row";
import { FaPizzaSlice } from 'react-icons/fa';
import { AiOutlineGift, AiFillGift, AiOutlineCoffee, FiCoffee, AiOutlineRight } from 'react-icons/ai';

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function RewardsContainer(props) {

  return (
    <Container >
      <Row className="row justify-content-center">
        <Col className="col-1 text-center p-0 m-0">
          <AiFillGift className="m-2" style={{ color: "#FEDE7D", fontSize: "35px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineRight className="m-3" style={{ color: "#FEDE7D", fontSize: "20px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineGift className="m-2" style={{ color: "#FEDE7D", fontSize: "35px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineRight className="m-3" style={{ color: "#FEDE7D", fontSize: "20px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineGift className="m-2" style={{ color: "#FEDE7D", fontSize: "35px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineRight className="m-3" style={{ color: "#FEDE7D", fontSize: "20px" }} />
        </Col>

        <Col className="col-1 text-center p-0 m-0">
          <AiOutlineGift className="m-2" style={{ color: "#FEDE7D", fontSize: "35px" }} />
        </Col>

      </Row>

    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default RewardsContainer;