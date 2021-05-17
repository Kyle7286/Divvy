/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
    import API from "../../utils/API";
    
/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function ManageTicketModal (props) {

    /* ---------------------------------- State --------------------------------- */

        // Set modal visability state to false by default
        const [visability, setVisablity] = useState(false)

    /* ------------------------ Modal Visability Handlers ----------------------- */

        // Show Modal
        function openModal () {
            setVisablity(true)
        };

        // Hide Modal
        function closeModal () {
            setVisablity(false)
        };

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
                        <form>
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
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="container-fluid">
                            <Button  className="btn-danger" onClick={deleteTicket}>Delete</Button>
                            <Button  className="btn-success" onClick={updateTicket}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default ManageTicketModal;