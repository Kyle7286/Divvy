/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/*
    Here I specify a Col and give it some basic bootstrap classes, 
    Then I pass props within that div (which is defined on my directory page
    as the md size??
*/

function Col (props) {
  return <div className="col-md" data-component="Col" {...props} />;
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default Col;