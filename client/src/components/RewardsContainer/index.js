/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useState, Component } from "react";
import Container from "../Container";
import Col from "../Column";
import Row from "../Row";
import { FaPizzaSlice } from 'react-icons/fa';
import { AiOutlineGift, AiFillGift, AiOutlineCoffee, FiCoffee, AiOutlineRight } from 'react-icons/ai';
import ReactToolTip from 'react-tooltip';

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function RewardsContainer(props) {

  const [{isPopoverOpen}, setIsPopoverOpen] = useState(false);

  return (
    <Container >
      <Row className="row justify-content-start">

        {props.rewards.map((reward, idx) => {

          console.log(reward);

          return (
            <>
              {/* Column containing Gift Icon */}
              <Col className="col-1 text-center p-0 m-0">
                {
                  props.points.points < reward.req_points
                    ?
                    <>
                      <ReactToolTip
                        id="main"
                        place="top"
                        type="warning"
                        effect="float"
                        multiline={true}
                      />
                      <a
                        data-for="main"
                        data-tip={reward.reward}
                        data-iscapture="true"
                      >
                        <AiOutlineGift 
                          className="m-2" 
                          style={{ color: "#FEDE7D", fontSize: "35px" }} 
                        /> 
                      </a>
                    </>
                    :
                    <AiFillGift 
                    className="m-2" 
                    style={{ color: "#FEDE7D", fontSize: "35px" }} 
                    />
                }
              </Col>

              {/* Ternary used to ensure an extra carrot (>) is not created at the end */}
              {(idx + 1) < props.rewards.length ?
                <Col className="col-1 text-center p-0 m-0">
                  <AiOutlineRight className="m-3" style={{ color: "#FEDE7D", fontSize: "20px" }} />
                </Col>
                : <></>}
            </>
          )
        })}
      </Row>
    </Container >
  )
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default RewardsContainer;