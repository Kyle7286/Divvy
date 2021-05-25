/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import "../../index.css";
import { useMediaQuery } from 'react-responsive';

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
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function StatCard(props) {
    return (
        <>
            <Default>
                <div tag="a" onClick={props.handleClick} data-vl={props.title} id={props.title} data-type="Status" style={{ cursor: "pointer" }} className=" card col-2 mx-3 shadow mb-2 text-center float-left px-0 statCard" data-component="employeecard">
                    <div className="card-body p-1" data-vl={props.title} data-type="Status">
                        <h6 className="card-text fw-bold" data-vl={props.title} data-type="Status">{props.title}</h6>
                        <p className="card-text" data-vl={props.title} data-type="Status">{props.amount}</p>
                    </div>
                </div>
            </Default>
            <Mobile>
                <div tag="a" onClick={props.handleClick} data-vl={props.title} id={props.title} data-type="Status" style={{ cursor: "pointer" }} className=" card col-3 mx-1 shadow mb-2 text-center float-left px-0 statCard" data-component="employeecard">
                    <div className="card-body p-1" data-vl={props.title} data-type="Status">
                        <h6 className="card-text fw-bold" data-vl={props.title} data-type="Status">{props.title}</h6>
                        <p className="card-text" data-vl={props.title} data-type="Status">{props.amount}</p>
                    </div>
                </div>
            </Mobile>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default StatCard;