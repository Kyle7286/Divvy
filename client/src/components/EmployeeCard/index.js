/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function EmployeeCard(props) {
    console.log("EMPLOYEE CARD PROPS", props);
    return (
        <div tag="a" onClick={props.handleClick} data-vl={props.employeeID} data-type="ID" ID={props.employeeID} style={{ cursor: "pointer" }} className="card employeecard clear_border col-3 m-1 text-center float-left px-0" data-component="employeecard">
            <div className="card-header" data-vl={props.employeeID} data-type="ID">
                {/* <div className="card-text" data-vl={props.employeeID} data-type="ID">{props.employeeTickets}</div> */}
                <div className="card-text" data-vl={props.employeeID} data-type="ID"><span class={props.className}>{props.employeeTickets}</span></div>
            </div>
            <div className="card-body p-1" data-vl={props.employeeID} data-type="ID">
                <div className="my-3 text-center">
                    <img 
                        src={props.profileIcon
                        ? 
                        props.profileIcon : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"} 
                        width="50px" 
                        alt="profile picture" 
                        className=" border border-warning shadow-lg rounded-pill"
                    >
                    </img>
                </div>
                <p className="card-text align-middle" data-vl={props.employeeID} data-type="ID">{props.employeeName}</p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default EmployeeCard;