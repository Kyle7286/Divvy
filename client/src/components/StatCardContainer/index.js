/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

   
    import React from "react";
    import StatCard from "../StatCard";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */


    function StatCardContainer (props) {
        // Check Props
        console.log('props.allTickets in stat card container props', props.allTickets);

        // Set value of all tickets to variable
        const totalTickets = props.allTickets;

        // get lenght
        const totalTicketsNumber = props.allTickets.length;

      
        // Return the three primary components
        return (
            <div className="d-flex flex-wrap justify-content-center" data-component="StatCardContainer">
                <StatCard
                    title="Total Tickets"
                    amount={totalTicketsNumber}
                />
                <StatCard
                     title="Open Tickets"
                     amount="#"
                />
                <StatCard
                    title="High Priority Tickets"
                    amount="#"
                />
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default StatCardContainer;