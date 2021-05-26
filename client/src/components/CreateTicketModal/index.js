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

/* ------------------------------ Props Filters ----------------------------- */

    // Define Current user into a variable for use in conditional class setting
    const currentUser = props.currentUser;

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

        // Define new ticket vairable to be set in next conditional
        let newTicket;

        // Check if client or not for ticket auto-populate
        function checkClientTicketCreate () {
            
            if (currentUser.role!="Client") {
                // If not a client, make new ticket with fields set by manager or employee
                newTicket = 
                    {
                        title: Title.current.value,
                        priority: Priority.current.value,
                        status: Status.current.value,
                        assigned_to: Assignee.current[Assignee.current.selectedIndex].getAttribute("data-user-id"), 
                        description: Description.current.value,
                        client_id: Client.current[Client.current.selectedIndex].getAttribute("data-client-id"),
                        team_id: currentUser.team_id, // Doing the team id of the user who is logged in
                        points:"10" // hard coded for MVP since not sure how or where we use this
                    }
            }
            else {
               // Else if a Client, make assignee null, status to open and auto set client based on the current user (client) firm and firm id and status
               newTicket = 
                    {
                        title: Title.current.value,
                        priority: Priority.current.value,
                        status: "Open",
                        assigned_to: null, // has to be assigned by manager later
                        description: Description.current.value,
                        client_id: currentUser.org_id,
                        team_id:"1", // hard coded for MVP since not sure how or where we use this
                        points:"10" // hard coded for MVP since not sure how or where we use this
                    }
            }
        }

        // Run the checkClientTicketCreate function
        checkClientTicketCreate();

        // Validate inputs and make API Call
        if (newTicket.client_id !=null && newTicket.title !="") {
            // Make the API call to update the ticket if client selected
            API.newTicket(newTicket)
                .then(closeModal)
                .then(window.location.reload())
                .catch(err=>console.log(err));
        }
        else {
            // If no client, alert them and do not make API call
            alert("Please make sure you have entered the required ticket information (client and title)")
        };
    };

     /* ------------ Check For Client User Role For Conditional Render ----------- */
        function checkClientComponentRender() {
            if (currentUser.role!="Client") {
                return (
                    <>
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
                        <div className="input-group mb-3">
                            <span className="input-group-text col-3">Status</span>
                            <select ref={Status} className="form-select"  aria-label="Default select example">
                                <option value="Open">Open</option>
                                <option value="Assigned">Assigned</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                  </>
                )
            }
            else {
                return;
            }
        };


/* -------------------- Modal Button and Modal Component -------------------- */

    return (
        <>
            <button  className="btn btn-sm btn-warning" variant="primary" onClick={openModal}>
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
                            {
                                checkClientComponentRender()
                            }
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  className="text-center btn-warning" onClick={createTicket}>Create Ticket</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default CreateTicketModal;