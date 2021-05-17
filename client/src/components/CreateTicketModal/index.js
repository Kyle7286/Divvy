/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
   
import React, { useEffect, useState } from "react"; 
import {Modal,Button} from "react-bootstrap";
import API from "../../utils/API";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function CreateTicketModal (props) {

    console.log('create ticket modal props', props);

/* ------------------------------ Props Filters ----------------------------- */

    // Take all users and filter it to employees for rendering list
    const allEmployees = props.allUsers.filter(user=> user.role!="Client");
       
    // Take all clients and filter to only name and id
    const allClients = props.allClients.map(client => 
        (
            {
               name: client.name,
               id: client.id 
            }
        )
    );
   
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
    let Title = React.createRef();
    let Priority = React.createRef();
    let Status = React.createRef();
    let Assignee = React.createRef();
    let Description = React.createRef();
    let Client = React.createRef();
   
    // Declare update handler function
    function createTicket () {

        // Create an updated ticket object that pulls latest info from possible edits
        const newTicket = 
            {
                title: Title.current.value,
                priority: Priority.current.value,
                status: Status.current.value,
                assigned_to: Assignee.current[Assignee.current.selectedIndex].getAttribute("data-user-id"), 
                description: Description.current.value,
                client_id: Client.current[Client.current.selectedIndex].getAttribute("data-client-id"),
                team_id:"1", // hard coded for MVP since not sure how or where we use this
                points:"10" // hard coded for MVP since not sure how or where we use this
            }

        // Validate inputs and make API Call
        if (newTicket.client_id !=null) {
            // Make the API call to update the ticket if clietn selected
            API.newTicket(newTicket)
                .then(res=> console.log('axio post response', res))
                .then(closeModal)
                .then(window.location.reload())
                .catch(err=>console.log(err));
        }
        else {
            // If no client, alert them and do not make API call
            alert("Please make sure you have selected a client for this new ticket!")
        };
    };

/* -------------------- Modal Button and Modal Component -------------------- */

    return (
        <>
            <button  className="btn btn-sm btn-info" variant="primary" onClick={openModal}>
                + Ticket
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
                                <input type="text" ref={Title} className="form-control" placeholder="Enter Ticket Title..." aria-label="Title" aria-describedby="titleinput"/> 
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
                                <span className="input-group-text col-3">Client</span>
                                <select ref={Client} className="form-select" aria-label="Default select example">
                                    <option value=""></option>
                                    {
                                    allClients.map(client => (
                                        <option value={client.name} data-client-id={client.id} key={client.id}>
                                            {client.name}
                                        </option>
                                    ))
                                    }
                                </select>
                            </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  className="text-center btn-success" onClick={createTicket}>Create Ticket</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default CreateTicketModal;