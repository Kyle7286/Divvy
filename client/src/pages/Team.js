/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import API from "../utils/API";


/* -------------------------------------------------------------------------- */
/*                           Set Mobile BreakPoints                           */
/* -------------------------------------------------------------------------- */

    // // Will render mobile friendly nav, horizontal with diff layout
    // const Mobile = ({ children }) => {
    //     const isMobile = useMediaQuery({ maxWidth: 1025 })
    //     return isMobile ? children : null
    // }
  
    // // Will render desktop friendly nav, vertical nav
    // const Default = ({ children }) => {
    //     const isNotMobile = useMediaQuery({ minWidth: 1026 })
    //     return isNotMobile ? children : null
    // }

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Profile(){

        /* ---------------------------------- State --------------------------------- */
            // Set tickets
            const [tickets, setTickets] = useState({})
            // Set users
            const [users, setUsers] = useState({})

        /* --------------------------------- Tickets -------------------------------- */

            // Load all tickets and store them in tickets

                // // Call when components have loaded
                // useEffect(() => {
                //     getTickets()
                // },[])

                // // Load All Tickets and Set Them to state
                // function getTickets () {
                //     API.getAllTickets()
                //         .then (res =>
                //             setTickets(res.data)
                //         )
                //         .catch(err => console.log(err));
                // };

        /* -------------------------------- Users---------------------------------- */
        
            // Load all employees and store them in employees

                // // Call when components have loaded
                // useEffect(() => {
                //     getUsers()
                // },[])

                // // Load all USERS
                // function getUsers () {
                //     API.getAllUsers()
                //         .then(res=>
                //             setUsers(res.data)
                //         )
                //         .catch(err => console.log(err));
                // }

                // console.log('users state is', users);


        /* ---------------------------- Component Render ---------------------------- */
         return (
            
            <p>Hi! I'm Team Page. I'm cooler than profile page. I promise.</p>
            
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    /*
        Exported for import within app.js
    */

    export default Profile;