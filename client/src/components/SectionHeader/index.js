/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "../../index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function SectionHeader(props) {
    return (
        <div className="text-center text-warning fw-normal fs-3 divvy-bg-tile p-3 mb-2" data-component="SectionHeader">
            {props.children}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default SectionHeader;