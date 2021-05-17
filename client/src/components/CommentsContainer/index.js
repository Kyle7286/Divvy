/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function CommentsContantainer() {
  return (
      <>
         <div class="card comments-section overflow-auto">
            <div class="card-body">
                <div className="bg-light p-1 my-1">
                    <div className="fw-bold text-primary">User Name</div>
                    <div>This is a comment</div>
                </div>                                    
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