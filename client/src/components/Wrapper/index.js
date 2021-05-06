/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    /*
        Props for this component comes from App.js. Within the wrapper component,
        I am passing it the directory page. 

        What I say here is I define a wrapper component which I pass props as an 
        argument. 

        Then, I return a main (div) with contents of all the elements (whic I 
        identify using spread operator) included within my props jsx, which is
        being passed in to this component as an argument from App.js as Directory
        compoenent, assuming the path matches what I specify in the route.
    */

    function Wrapper(props) {
        return <main className="wrapper mb-4 pb-5" {...props} />;
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */
    /*
        Exported for use in app.js
    */
    export default Wrapper;