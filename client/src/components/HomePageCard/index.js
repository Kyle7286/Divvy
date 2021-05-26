/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { useHistory } from "react-router-dom";
import "../../index.css";
import SectionHeader from "../SectionHeader";
import Row from "../Row";
import Col from "../Column";
import Rewards from "./rewards.PNG";
import Filter from "./filter.PNG";
import Dash from "./dash.PNG";
import Capacity from "./capacity.PNG"


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function HomePageCard(props) {

    let history = useHistory();

    function loginClickHandle() {
        history.push("/login");
    }

    return (
        
        
        <div className="container">
           
            <Row className="my-3">
                <Col>
                    <div className="divvy-font-logo fs-1 divvy-accent text-center">
                        Don't Let The Busy Win ...
                    </div>
                </Col>
            </Row>

            {/* Feature Tiles */}
            <Row className="divvy-bg-tile my-4 p-3 d-flex my-auto fs-3">
                <Col className="col-lg-4 text-center my-auto">
                    <img src={Dash} class="img-thumbnail" alt="Dashboard"/>
                </Col>
                <Col className="col-lg-8 text-center my-auto">
                    <div className="divvy-accent fw-bold">Manage Dashboard</div>
                    <div>Simple dashboard for ticket creation and management</div>
                </Col>
            </Row>
            <Row className="divvy-bg-tile my-8 my-4 p-3 d-flex fs-3">
                <Col className="col-lg-8 text-center my-auto">
                    <div className="divvy-accent fw-bold">Capacity Visulization</div>
                    <div>Intelligent sorting of availible team members to help capacity distribution at all times</div>
                </Col>
                <Col className="col-lg-4 text-center my-auto">
                <img src={Capacity} class="img-thumbnail" alt="Capacity"/>
                </Col>
            </Row>
            <Row className="divvy-bg-tile my-8 my-4 p-3 d-flex fs-3">
                <Col className="col-lg-4 my-auto text-center">
                <img src={Filter} class="img-thumbnail" alt="Filter"/>
                </Col>
                <Col className="col-8 my-auto text-center">
                    <div className="divvy-accent fw-bold">Multi-tier sort and function</div>
                    <div>Multi-tiered sorting and filtering for enabling the view YOU need to best manage the workload</div>
                </Col>
            </Row>
            <Row className="divvy-bg-tile my-8 my-4 p-3 d-flex fs-3">
                <Col className="col-lg-8 my-auto">
                    <div className="divvy-accent fw-bold text-center">Rewards</div>
                    <div>Gamified rewards system to keep the working fun and the hard working recognized</div>
                </Col>
                <Col className="col-4 text-center my-auto">
                    <img src={Rewards} class="img-thumbnail" alt="Rewards"/>
                </Col>
            </Row>

            <Row className="my-3">
                <Col>
                    <div className="divvy-font-logo fs-1 divvy-accent text-center fs-5">
                        ...Lets Divvy.
                    </div>
                </Col>
            </Row>
           
        </div>
       
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default HomePageCard;