/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
    import API from "../../utils/API";
    import "./index.css";
    import CommentsContantainer from "../CommentsContainer";
    import dayjs from "dayjs";
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function ManageTicketModal (props) {

    /* ------------------------------ Props Filters ----------------------------- */

        // Take all users and filter it to employees for rendering list
        const allEmployees = props.allUsers.filter(user=> user.role!="Client");

        // Define Current user into a variable for use in conditional class setting
        const currentUser = props.currentUser;

    /* ---------------------------------- State --------------------------------- */

        // Set state

            // Modal and Section Visability
            const [visability, setVisablity] = useState(false)
            const [isTicketShowing, setisTicketShowing] = useState(true)
            const [isClientShowing, setisClientShowing] = useState(false)
            const [isCommentShowing, setisCommentShowing] = useState(false)
            const [isNewCommentShowing, setisNewCommentShowing] = useState(false)

            // Recent Comments and Count
            const [recentComments, setRecentComments] = useState([])
            const [recentCommentsCount, setRecentCommentsCount] = useState(0);

    /* ------------------------ Modal Visability Handlers ----------------------- */

        // Show Modal
        function openModal () {
            setVisablity(true)
        };

        // Hide Modal
        function closeModal () {
            setVisablity(false)
        };

    /* --------------------- Details Visability Handlers  ------------------------ */
        
        // Show Ticket Details
        function handleShowTicketDetails () {
            // Set this showing state to true and others false
            setisTicketShowing(true);
            setisClientShowing(false);
            setisCommentShowing(false);
        }

        // Show Client Details
        function handleShowClientDetails () {
            // Set this state true and others false
            setisTicketShowing(false);
            setisClientShowing(true);
            setisCommentShowing(false);
        }

        // Show Client Details
        function handleShowCommentDetails () {
            // Set this state true and others false
            setisTicketShowing(false);
            setisClientShowing(false);
            setisCommentShowing(true);
        }

        // Show comments count

    /* -------------------------- Handle Ticket Update -------------------------- */

        // Define references and general variables for values on update
        let latestPriority = React.createRef();
        let latestStatus = React.createRef();
        let latestAssignee = React.createRef();
        let latestDescription = React.createRef();
       
        // Declare update handler function
        function updateTicket () {

            // Create an updated ticket object that pulls latest info from possible edits
            const updatedTicket = 
                {
                    priority: latestPriority.current.value,
                    status: latestStatus.current.value,
                    assigned_to: latestAssignee.current[latestAssignee.current.selectedIndex].getAttribute("data-user-id"), 
                    description: latestDescription.current.value
                }
            
            // Make the API call to update the ticket
            API.updateTicket(props.ticketID, updatedTicket)
                .then(closeModal)
                .then(window.location.reload())
                .catch(err=>console.log(err));
        };

        /* -------------------------- Handle Ticket Delete -------------------------- */

        // Declare update handler function
        function deleteTicket () {
            
            // Confirm intent to delete
            const confirmDelete = prompt('Deleting this ticket will permentenly remove all of its data. If you with to delete, please type "DELETE" below to confirm');
            confirmDelete;

            // If confirmed, delete
            if (confirmDelete === "DELETE") {
                API.deleteTicket(props.ticketID)
                    .then(closeModal)
                    .then(window.location.reload())
                    .catch(err=>console.log(err));
            };
        };

        /* --------------------------- Handle New Comment --------------------------- */
        
        // Define references & global variables
        let newCommentTextArea = React.createRef();
        let recentComment=[]
        const currentUserName = `${props.currentUser.first_name} ${props.currentUser.last_name}`;

        
        // On click of + comment button, show the text-area and allow for entry
            function readyNewComment () {
                // Set state to render new comment div
                setisNewCommentShowing(true);
            };

            // Cancel new comment if needed
            function cancelNewComment (e) {
                // Avoid refresh
                e.preventDefault();
                // Set state to hide new comment div again
                setisNewCommentShowing(false);
                // Clear the value of anything that had been typed in
                newCommentTextArea.current.value="";
            };

            function postNewComment (e) {
                // Prevent Default
                e.preventDefault();

                // Create an object with the info needed for posting a new comment
                const newComment=
                    {
                      ticket_id: props.ticketID,
                      user_id: props.currentUser.id,
                      comment: newCommentTextArea.current.value,
                      date_modified:null
                      // NOTE that date_created is managed by sql automatically based on model updates
                    }

                // update an array value that we will feed to state
                recentComment = (
                    <div className="bg-light p-1 my-1 container" data-tester="recentComment">
                        <div className="row">
                            <div className="fw-bold text-warning col">{currentUserName}</div> 
                        </div>
                        <div className="row">
                            <div className="col">{newCommentTextArea.current.value}</div> 
                        </div>
                        <div className="row text-right">
                            <div className=" col fst-italic mt-2 mr-1 align-self-end">{dayjs().format('MMMM-DD-YYYY [at] hh:mmA')}</div> 
                        </div>           
                    </div>
                );

                // Update state (concat so recent comments show top of list)
                setRecentComments([recentComment].concat(recentComments));

                // Update recent comments count
                setRecentCommentsCount(recentCommentsCount + 1); 

                // Post the new comment to the server (TODO)
                API.newComment(newComment)
                    .catch(err=>console.log(err));

                // Hide the new comments div and clear it (re run cancelNewComment)
                cancelNewComment(e);
            }

        /* -------------------- Modal Button and Modal Component -------------------- */

        return (
            <>
                <button  className="btn btn-sm btn-outline-warning" variant="primary" onClick={openModal}>
                    Manage
                </button>
                <Modal show={visability} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.ticketID} - {props.ticketTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <div className="row mb-3 justify-content-center">
                           <div className="col text-center">
                               <button 
                                    className={isTicketShowing ? "btn alert-warning btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowTicketDetails}>
                                        Ticket Details
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isClientShowing ? "btn alert-warning btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowClientDetails}>
                                        Client Details
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isCommentShowing ? "btn alert-warning btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowCommentDetails}>
                                        Comments {(props.ticketComments != undefined) ? `(${props.ticketComments.length + recentCommentsCount})` : ""}
                                </button>
                           </div>
                       </div>
                        <form>
                            <div className={isTicketShowing ? "" : "d-none"}>
                                <h5 className= "text-center">Manage</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Priority</span>
                                    <select ref={latestPriority} className="form-select" defaultValue={props.ticketPriority} aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Status</span>
                                    <select 
                                        ref={latestStatus} 
                                        className="form-select" 
                                        defaultValue={props.ticketStatus} 
                                        disabled={currentUser.role !="Client" ? false : true}
                                        aria-label="Default select example"
                                        >
                                        <option value="Open">Open</option>
                                        <option value="Assigned">Assigned</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Assignee</span>
                                    <select 
                                        ref={latestAssignee} 
                                        data-user-id={props.ticketAssignee.id} 
                                        className="form-select" 
                                        defaultValue={props.ticketAssignee} 
                                        disabled={currentUser.role !="Client" ? false : true}
                                        aria-label="Default select example"
                                        >
                                        <option value=""></option>
                                        {
                                        allEmployees.map(employee => (
                                            <option value={`${employee.first_name} ${employee.last_name}`} data-user-id={employee.id} key={employee.id}>
                                                {`${employee.first_name} ${employee.last_name}`}
                                            </option>
                                        ))
                                        }
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text col-3">Description</span>
                                    <textarea ref={latestDescription} className="form-control" defaultValue={props.ticketDescription} placeholder="Enter Description..." aria-label="With textarea"></textarea>
                                </div>
                            </div>
                            <div className={isClientShowing ? "" : "d-none"}>
                                <h5 className= "text-center mt-3">Client Details</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Firm Name</span>
                                    <input readOnly={true} value={props.ticketFirm}type="text" className="form-control" placeholder="Firm" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Firm Contact</span>
                                    <input readOnly={true} value={props.ticketFirmContact}type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Firm Phone</span>
                                    <input readOnly={true} value={props.ticketFirmPhone}type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                            </div>
                           <div className={isCommentShowing ? "" : "d-none"}>
                            <h5 className= "text-center mt-3">Comments</h5>
                                    <CommentsContantainer
                                        comments={props.ticketComments}
                                        currentUser={props.currentUser}
                                    >
                                        <div className={isNewCommentShowing ? "mb-2" : "d-none"}>
                                            <div className="form-group mb-1">
                                                <textarea ref={newCommentTextArea} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div className="text-right mb-2">
                                                <button className="btn btn-outline-warning btn-sm py-0 mx-1" onClick={postNewComment}>Post</button>
                                                <button className="btn btn-outline-secondary btn-sm py-0 mx-1" onClick={cancelNewComment}>Cancel</button>
                                            </div>
                                        </div>

                                        {recentComments} {/* each time this renders, it is only having the previous comment. So somehow its stacking it twice or something*/}

                                    </CommentsContantainer>

                           </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="container-fluid">
                            <div className={isTicketShowing ? "" : "d-none"} >
                                <Button  className="btn-secondary mx-2" onClick={deleteTicket}>Delete</Button>
                                <Button  className="btn-warning mx-2" onClick={updateTicket}>Update</Button>
                            </div>
                            <div className={isCommentShowing ? "" : "d-none"} >
                                <button className="btn btn-warning" onClick={readyNewComment}>+ Comment</button>
                            </div>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default ManageTicketModal;