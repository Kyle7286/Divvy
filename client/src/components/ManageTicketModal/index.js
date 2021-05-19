/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
    import API from "../../utils/API";
    import "./index.css";
    import CommentsContantainer from "../CommentsContainer";
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function ManageTicketModal (props) {

        console.log('props in manage ticket modal is', props);

    /* ---------------------------------- State --------------------------------- */

        // Set modal visability state to false by default
        const [visability, setVisablity] = useState(false)
        const [isTicketShowing, setisTicketShowing] = useState(true)
        const [isClientShowing, setisClientShowing] = useState(false)
        const [isCommentShowing, setisCommentShowing] = useState(false)

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

    /* ------------------------------ Props Filters ----------------------------- */

        // Take all users and filter it to employees for rendering list
        const allEmployees = props.allUsers.filter(user=> user.role!="Client");

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
                .then(res=> console.log('axio put response', res))
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
    /* -------------------- Modal Button and Modal Component -------------------- */

        return (
            <>
                <button  className="btn btn-sm btn-outline-info" variant="primary" onClick={openModal}>
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
                                    className={isTicketShowing ? "btn btn-info btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowTicketDetails}>
                                        Ticket Details
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isClientShowing ? "btn btn-info btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowClientDetails}>
                                        Client Details
                                </button>
                           </div>
                           <div className="col text-center">
                               <button 
                                    className={isCommentShowing ? "btn btn-info btn-sm text-center" : "btn btn-light btn-sm text-center"} 
                                    onClick={handleShowCommentDetails}>
                                        Comments {(props.ticketComments != undefined) ? `(${props.ticketComments.length})` : ""} 
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
                                    <select ref={latestStatus} className="form-select" defaultValue={props.ticketStatus} aria-label="Default select example">
                                        <option value="Open">Open</option>
                                        <option value="Assigned">Assigned</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Assignee</span>
                                    <select ref={latestAssignee} data-user-id={props.ticketAssignee.id} className="form-select" defaultValue={props.ticketAssignee} aria-label="Default select example">
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
                                    />
                           </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="container-fluid">
                            <div className={isTicketShowing ? "" : "d-none"} >
                                <Button  className="btn-danger mx-2" onClick={deleteTicket}>Delete</Button>
                                <Button  className="btn-success mx-2" onClick={updateTicket}>Update</Button>
                            </div>
                            <div className={isCommentShowing ? "" : "d-none"} >
                                <button className="btn btn-primary">+ Comment</button>
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