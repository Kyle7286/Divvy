/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import API from "../utils/API";


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
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Profile(){

        /* ---------------------------------- State --------------------------------- */

    const [user, setUser] = useState({})

    // Call when components have loaded
    useEffect(() => {
        getUser();
    }, [])


    function getUser() {
        API.getSingleUser()
        .then(res => {
            setUser(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    };

        /* ---------------------------- Component Render ---------------------------- */
         return (
            <p>Hi! I'm Profile Page. Nice to meet you.</p>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    /*
        Exported for import within app.js
    */

    export default Profile;