/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

/*
    Here I specify a container and give it some basic bootstrap classes, 
    Then I pass props within that div (which is defined on my directory page
    as the row component)
*/

function Container(props) {
  return <div className="container" data-component="Container" {...props} />;
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default Container;