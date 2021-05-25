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
            //console.log ('props in Comments Container are', props)

            // Organize comments into array of objects
            const comments = props.comments;
            
            // Get the user whom is logged id so we can check if they are the comment owner
            const currentUserId=props.currentUser.id;
              
        /* -------------------------- Define Data Formatter ------------------------- */
           
            function convertDate(date) {
                return dayjs(date).format('MMMM-DD-YYYY [at] hh:mmA')
            };

        /* ---------------------------- Return Component ---------------------------- */
            return (
                <>
                    <div className="card comments-section overflow-auto">
                        <div className="card-body">
                           {props.children}
                            {comments.map(comment => {
                                return (
                                    <CommentDiv
                                        user={`${comment.user.first_name} ${comment.user.last_name}`}
                                        comment={comment.comment}
                                        date={convertDate(comment.date_created)}
                                        key={comment.id}
                                        divClassName={comment.user_id===currentUserId 
                                            ?
                                            "bg-light p-2 my-1 container"
                                            :
                                            "bg-light p-2 my-1 ml-2 container"
                                        }
                                        nameClassName={comment.user_id===currentUserId 
                                            ?
                                            "fw-bold text-warning col"
                                            :
                                            "fw-bold text-secondary col"
                                        }
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