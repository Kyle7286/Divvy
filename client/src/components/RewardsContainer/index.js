/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useState } from "react";
import Container from "../Container";
import Col from "../Column";
import Row from "../Row";
import { AiOutlineGift, AiFillGift, AiOutlineRight } from 'react-icons/ai';
import RewardModal from './RewardModal';

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function RewardsContainer(props) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }


  // Fill Reward Click
  const handleFillRewardClick = (e) => {
    e.preventDefault();

    console.log("Clicked");
  }

  // Out Reward Click
  const handleOutRewardClick = (e) => {
    e.preventDefault();

    console.log("Clicked");
  }


  return (
    <Container >
      <Row className="row justify-content-start">

        {props.rewards.map((reward, idx) => {
          return (
            <>
              {/* Column containing Gift Icon */}
              <Col className="col-2 text-center p-0 m-0">
                {
                  props.points.points < reward.req_points
                    ? <div><AiOutlineGift
                      onClick={handleOutRewardClick}
                      className="m-2"
                      style={{ color: "#FEDE7D", fontSize: "30px" }}
                    />
                    </div> : [
                      <AiFillGift
                        onClick={handleFillRewardClick}
                        className="m-2"
                        style={{ color: "#FEDE7D", fontSize: "30px", margin: "0", padding: "0" }}
                        onClick={openModal}
                      />,
                      <RewardModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        reward={reward}
                      />
                    ]
                }
              </Col>
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