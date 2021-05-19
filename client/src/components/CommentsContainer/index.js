/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import CommentDiv from "../CommentDiv"
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */
    // Get the user whom is logged in

    // Get all the comments from the ticket

    // Render the Component with comment Divs (map through and render comment div)
    function CommentsContantainer() {
    return (
        <>
            <div className="card comments-section overflow-auto">
                <div className="card-body">
                    <CommentDiv/>                                 
                </div>
            </div>
            <button className="btn btn-sm btn-primary btn-outline m-1 btn-rounded px-2 py-0">+</button>
        </>
    )
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default CommentsContantainer;