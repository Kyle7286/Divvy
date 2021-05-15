/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";
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
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    This page component will render all our stuff below it within the bs container
    class for spacing. This is our whitespace for making the UI alongside
    the navbar. 
*/


function Home() {

    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>
            <h1>Home Page</h1>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Home;