/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
import React, { useEffect, useState } from "react"; 
import {Modal,Button} from "react-bootstrap";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function CreateTicketModal (props) {

    //console.log('props.allusers in create ticket modal is', props.allUsers);

/* ------------------------------ Props Filters ----------------------------- */

    // Take all users and filter it to employees for rendering list
    const allEmployees = props.allUsers.filter(user=> user.role!="Client");
        //console.log(allEmployees);

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

/* ------------------------ Handle Creation of Ticket ----------------------- */

    // Define references and general variables for values on update
    let Priority = React.createRef();
    let Status = React.createRef();
    let Assignee = React.createRef();
    let Description = React.createRef();
   
    // Declare update handler function
    function createTicket () {

        // Create an updated ticket object that pulls latest info from possible edits
        const newTicket = 
            {
                priority: Priority.current.value,
                status: Status.current.value,
                assigned_to: Assignee.current[latestAssignee.current.selectedIndex].getAttribute("data-user-id"), 
                description: Description.current.value
            }
        
        // // Make the API call to update the ticket
        // API.updateTicket(props.ticketID, updatedTicket)
        //     .then(res=> console.log('axio put response', res))
        //     .then(closeModal)
        //     .then(window.location.reload())
        //     .catch(err=>console.log(err));
    };

/* -------------------- Modal Button and Modal Component -------------------- */

    return (
        <>
            <button  className="btn btn-sm btn-outline-success" variant="primary" onClick={openModal}>
                New Ticket
            </button>
            <Modal show={visability} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Ticket Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <h5 className= "text-center">Ticket Details</h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Ticket Title</span>
                                <input type="text" className="form-control" placeholder="Enter Ticket Title..." aria-label="Title" aria-describedby="titleinput"/> 
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Description</span>
                                <textarea ref={Description} className="form-control" placeholder="Enter Description..." aria-label="With textarea"></textarea>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Priority</span>
                                <select ref={Priority} className="form-select" aria-label="Default select example">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select> 
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Status</span>
                                <select ref={Status} className="form-select"  aria-label="Default select example">
                                    <option value="Open">Open</option>
                                    <option value="Assigned">Assigned</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Assignee</span>
                                <select ref={Assignee} className="form-select" aria-label="Default select example">
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
                            <div className="input-group mb-3">
                                <span className="input-group-text col-3">Firm</span>
                                <select ref={Assignee} className="form-select" aria-label="Default select example">
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  className="text-center btn-success" onClick={createTicket}>Create Ticket</Button>
                    <Button  className="text-center" variant="secondary" onClick={closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

export default CreateTicketModal;