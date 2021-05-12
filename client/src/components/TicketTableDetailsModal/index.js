/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, { useEffect, useState } from "react"; 
    import {Modal,Button} from "react-bootstrap";


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
                                    <input type="text" className="form-control" placeholder="Select Priority" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Status</span>
                                    <input type="text" className="form-control" placeholder="Select Status" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Assignee</span>
                                    <input type="text" className="form-control" placeholder="Select Status" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text col-3">Description</span>
                                    <textarea className="form-control" placeholder="Enter Description..." aria-label="With textarea"></textarea>
                                </div>
                            <h5 className= "text-center mt-3">Additional Details</h5>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Task ID</span>
                                    <input readOnly={true} type="text" className="form-control" placeholder="Task ID" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm</span>
                                    <input readOnly={true} type="text" className="form-control" placeholder="Firm" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm Contact</span>
                                    <input readOnly={true} type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text col-3" id="priorityinput">Firm Phone</span>
                                    <input readOnly={true} type="text" className="form-control" placeholder="Firm Contact" aria-label="Priority" aria-describedby="priorityinput"/> 
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