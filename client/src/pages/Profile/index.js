/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useMediaQuery } from 'react-responsive';
import { useUserContext } from "../../utils/GlobalState";


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

/*
    This page component will render all our stuff below it within the bs container
    class for spacing. This is our whitespace for making the UI alongside
    the navbar. 
*/


function Profile(props) {

    const [state] = useUserContext();


    /* ---------------------------- Component Render ---------------------------- */
    return (

        <>
            <h1>Profile Page</h1>
            <h1>{console.log(state)}</h1>
            <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({ type: "login" })}>
                Add
      </button>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Profile;