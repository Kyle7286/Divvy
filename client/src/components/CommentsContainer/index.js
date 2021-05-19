/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import CommentDiv from "../CommentDiv"
    import "./index.css";
    const dayjs = require('dayjs');

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

        /* -------------------------- Define Data Formatter ------------------------- */
           
            function convertDate(date) {
                return dayjs(date).format('MMMM-DD-YYYY')
            };

        /* --------------------------- Handle New Comment --------------------------- */

        
        /* ---------------------------- Return Component ---------------------------- */
            return (
                <>
                    <button className="btn btn-sm btn-primary btn-outline mb-2 btn-rounded py-0">+ Comment</button>
                    <div className="card comments-section overflow-auto">
                        <div className="card-body">
                            {comments.map(comment => {
                                return (
                                    <CommentDiv
                                        user={`${comment.user.first_name} ${comment.user.last_name}`}
                                        comment={comment.comment}
                                        date={convertDate(comment.date_created)}
                                        key={comment.user_id}
                                    /> 
                                )
                            })}                                
                        </div>
                    </div>
                    
                </>
            )
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default CommentsContantainer;