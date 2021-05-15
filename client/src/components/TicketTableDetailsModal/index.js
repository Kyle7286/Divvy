/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
    import API from "../../utils/API";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function TicketTableDetailsModal(props) {

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

        // get event 
        // Define references for values on update
        let latestPriority = React.createRef();
        let latestStatus = React.createRef();
        let latestAssignee = React.createRef();
        let latestDescription = React.createRef();

        // Declare update handler function
        function updateTicket () {

            
            // console.log(latestPriority.current.value);
            // console.log(latestStatus.current.value);
            // console.log(latestAssignee.current.value);
            // console.log(latestDescription.current.value);
            // console.log(latestAssignee.current);

            // update an object to put back to the server
            const updatedTicket = 
                {
                    priority: latestPriority.current.value,
                    status: latestStatus.current.value,
                    assignee: "placeholderassigneeid2",
                    description: latestDescription.current.value
                }
            
            // Make the API call to update the ticket
            console.log('updated object is', updatedTicket);

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
                                    <select ref={latestAssignee} className="form-select" defaultValue={props.ticketAssignee} aria-label="Default select example">
                                        <option value=""></option>
                                        {
                                        allEmployees.map(employee => (
                                            <option value={`${employee.first_name} ${employee.last_name}`} data-userid={employee.id} key={employee.id}>
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
                            <h5 className= "text-center mt-3">Reporting Firm</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3">Firm</span>
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
                    <Modal.Footer>
                        <Button  className="text-center btn-success" onClick={updateTicket}>Update</Button>
                        <Button  className="text-center" variant="secondary" onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default TicketTableDetailsModal;