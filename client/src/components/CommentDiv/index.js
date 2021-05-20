/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    // User name and comment set by comments container during map
    function CommentsDiv(props) {
        console.log('props on comment div are', props)
        return (
            <>
                <div className={props.divClassName}>
                    <div className="row">
                        <div className={props.nameClassName}>{props.user}</div> 
                    </div>
                    <div className="row">
                        <div className="col">{props.comment}</div> 
                    </div>
                    <div className="row text-right">
                        <div className=" col fst-italic mt-2 mr-1 align-self-end">{props.date}</div> 
                    </div>           
                </div>
            </>
        )
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default CommentsDiv;