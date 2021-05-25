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

  return (
      <>
        {props.rewards.map((reward) => {

          return (
            <>
                {
                  props.points.points < reward.req_points
                    ?
                      <AiOutlineGift 
                        className="m-2" 
                        style={{ color: "#FEDE7D", fontSize: "35px" }} 
                      /> 
                    :
                      <>
                        <ReactToolTip
                          id="achieved"
                          place="top"
                          type="warning"
                          effect="float"
                          multiline={true}
                        />
                        <a
                          data-for = "achieved"
                          data-tip={reward.reward}
                          data-iscapture="true"
                          className="mx-1"
                        >
                          <AiFillGift 
                            className="m-1" 
                            style={{ color: "#FEDE7D", fontSize: "35px" }} 
                          />
                        </a>
                      </>
                }
            </>
          )
        })}
       </>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default RewardsContainer;