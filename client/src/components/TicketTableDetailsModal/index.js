/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";
import EmployeeCard from "../EmployeeCard";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function TicketTableDetailsModal(props) {

    /* ---------------------------------- State --------------------------------- */

        // Set visability state to false by default
        const [visability, setVisablity] = useState(false)

    /* ------------------------ Modal Visability Handlers ----------------------- */

        function openModal () {
            setVisablity(true)
        };

        function closeModal () {
            setVisablity(false)
        };

    /* ------------------------------ Props Filters ----------------------------- */

        // Take all users and filter it to employees for rendering list
        const allEmployees = props.allUsers.filter(user=> user.role!="Client");

    /* -------------------- Modal Button and Modal Component -------------------- */

        return (
            <>
                <button  className="btn btn-sm btn-outline-info" variant="primary" onClick={openModal}>
                    Manage
                </button>
                <Modal show={visability} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.ticketTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <h5 className= "text-center">Manage</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Priority</span>
                                    <select className="form-select" defaultValue={props.ticketPriority} aria-label="Default select example">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Status</span>
                                    <select className="form-select" defaultValue={props.ticketStatus} aria-label="Default select example">
                                        <option value="Open">Open</option>
                                        <option value="Assigned">Assigned</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Assignee</span>
                                    <select className="form-select" defaultValue={props.ticketAssignee} aria-label="Default select example">
                                        {
                                        allEmployees.map(employee => (
                                            <option value={employee.first_name} key={employee.id}>
                                                {`${employee.first_name} ${employee.last_name}`}
                                            </option>
                                        ))
                                        }
                                    </select>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text col-3">Description</span>
                                    <textarea className="form-control" defaultValue={props.ticketDescription} placeholder="Enter Description..." aria-label="With textarea"></textarea>
                                </div>
                            <h5 className= "text-center mt-3">Additional Details</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Ticket ID</span>
                                    <input readOnly={true} value={props.ticketID} type="text" className="form-control" placeholder="Task ID" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm</span>
                                    <input readOnly={true} value={props.ticketFirm}type="text" className="form-control" placeholder="Firm" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm Contact</span>
                                    <input readOnly={true} value={props.ticketFirmContact}type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm Phone</span>
                                    <input readOnly={true} value={props.ticketFirmPhone}type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer className="text-center">
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