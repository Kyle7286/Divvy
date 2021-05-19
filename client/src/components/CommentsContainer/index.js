/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import CommentDiv from "../CommentDiv"
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */
    
    function CommentsContantainer(props) {

        /* -------------------------- Organize Information -------------------------- */

            // Check the props (this includes all comments associated with the ticket)
            console.log ('props in Comments Container are', props)

            // Organize comments into array of objects
            const rawComments = [...props.comments];
                console.log('rawComments variable is', rawComments);
            
            // Reverse array order so that last posted shows highest in comment div
            const comments = rawComments.reverse();
                console.log('reversed comments are', comments);
        
            // Get the user whom is logged in (get current user api route)


        /* --------------------------- Handle New Comment --------------------------- */

        
        /* ---------------------------- Return Component ---------------------------- */
            return (
                <>
                    <div className="card comments-section overflow-auto">
                        <div className="card-body">
                            {comments.map(comment => {
                                return (
                                    <CommentDiv
                                        user={`${comment.user.first_name} ${comment.user.last_name}`}
                                        comment={comment.comment}
                                        date={comment.date_created}
                                        key={comment.user_id}
                                    /> 
                                )
                            })}                                
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