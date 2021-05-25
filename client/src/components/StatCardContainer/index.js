/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import StatCard from "../StatCard";
import { useMediaQuery } from 'react-responsive';
import "../../index.css";

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

function StatCardContainer(props) {

    // Handle Getting Total Tickets 
    const totalTickets = props.allTickets;
    const totalTicketsNumber = props.allTickets.length;

    // Handle Getting Open Tickets (confirm status is 0)
    let openTickets = totalTickets.filter(ticket => ticket.status == "Open");

    // Handle Getting Unassigned (and open) tickets
    /*
        I filter based on two conditions. If its unassigned, and if its open. If
        its closed it doesnt matter, and the numbers look weird if you have
        "15 unassigned" but only "5" open
    */
    let unassignedTickets = totalTickets.filter(ticket => ticket.assigned_to === null && ticket.status != "Completed");

    function checkClient() {
        if (props.currentUser.role != "Client") {
            return (
                <StatCard
                    title="My Tickets"
                    amount={props.assignedTicketCount}
                    handleClick={props.handleClick}
                />
            )
        }
        else {
            return;
        }
    };


    // Return the three primary status card components
    return (
        <>
            <Default>
                <div className="mb-3 divvy-bg-tile">
                    <div className="d-flex flex-wrap justify-content-center py-3" data-component="StatCardContainer">
                        {checkClient()}
                        {/* <StatCard
                            title="Assigned To Me"
                            amount={props.assignedTicketCount}
                            handleClick={props.handleClick}
                        /> */}
                        <StatCard
                            title="Total Active"
                            amount={props.activeTicketCount}
                            handleClick={props.handleClick}
                        />
                        <StatCard
                            title="Open"
                            amount={props.openTicketCount}
                            handleClick={props.handleClick}
                        />
                        <StatCard
                            title="Unassigned"
                            amount={props.unassignedTicketCount}
                            handleClick={props.handleClick}
                        />
                        <StatCard
                            title="Completed"
                            amount={props.completedTicketCount}
                            handleClick={props.handleClick}
                        />
                    </div>
                </div>
            </Default>
            <Mobile>
                <div className="mb-3 mx-2 divvy-bg-tile">
                    <div className="d-flex flex-wrap justify-content-center py-3" data-component="StatCardContainer">
                        {checkClient()}
                        {/* <StatCard
                            title="Assigned To Me"
                            amount={props.assignedTicketCount}
                            handleClick={props.handleClick}
                        /> */}
                        <StatCard
                            title="Total Active"
                            amount={props.activeTicketCount}
                            handleClick={props.handleClick}
                        />
                        <StatCard
                            title="Completed"
                            amount={props.completedTicketCount}
                            handleClick={props.handleClick}
                        />
                    </div>
                </div>
            </Mobile>
        </>

    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default StatCardContainer;