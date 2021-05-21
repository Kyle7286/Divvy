/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import StatCard from "../StatCard";
    import "../../index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function StatCardContainer (props) {
       
        // Handle Getting Total Tickets 
        const totalTickets = props.allTickets; 
        const totalTicketsNumber = props.allTickets.length;
        
        // Handle Getting Open Tickets (confirm status is 0)
        let openTickets = totalTickets.filter(ticket=> ticket.status=="Open");

        // Handle Getting Unassigned (and open) tickets
        /*
            I filter based on two conditions. If its unassigned, and if its open. If
            its closed it doesnt matter, and the numbers look weird if you have
            "15 unassigned" but only "5" open
        */
        let unassignedTickets = totalTickets.filter(ticket=> ticket.assigned_to===null && ticket.status!="Completed");
           
                
        // Return the three primary status card components
        return (
            <div className="bg-light mb-3">
                <div className="d-flex flex-wrap justify-content-center py-3" data-component="StatCardContainer">
                    <StatCard
                        title="Total"
                        amount={totalTicketsNumber}
                        handleClick={props.handleClick}
                        />
                    <StatCard
                        title="Open"
                        amount={openTickets.length}
                        handleClick={props.handleClick}
                    />
                    <StatCard
                        title="Unassigned"
                        amount={unassignedTickets.length}
                        handleClick={props.handleClick}
                    />
                </div>
            </div>
           
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StatCardContainer;