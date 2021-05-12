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

function Profile() {

    /* ---------------------------------- State --------------------------------- */

 

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