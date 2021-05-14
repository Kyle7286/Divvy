/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import TicketTable from "../components/TicketTable";
import TicketTableMobile from "../components/TicketTableMobile";
import SectionHeader from "../components/SectionHeader";
import EmployeeCardContainer from "../components/EmployeeCardContainer";
import StatCardContainer from "../components/StatCardContainer";
import { useMediaQuery } from 'react-responsive';
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

function Test() {

    /* ---------------------------- Component Render ---------------------------- */
    return (
        <>
            <h1>I"M A TEST PAGE</h1>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

/*
    Exported for import within app.js
*/

export default Test;