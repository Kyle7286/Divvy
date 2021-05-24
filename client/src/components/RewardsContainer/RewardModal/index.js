import React from "react";

const RewardModal = (props) => {

    const modalStyle = {
        color: "white",
        fontSize: "10px",
        border: "solid; black; 5px",
        backgroundColor: "orange",
        borderRadius: "10px",
        fontWeight: "bold"
    };


    return (
        <>
            {props.showModal ?
                <div key={props.reward.id} style={modalStyle}>
                    <span className="d-block">{props.reward.reward}</span>
                    <span className="d-inline">{props.reward.req_points}</span>
                </div>
                :
                null
            }
        </>
    )
}


export default RewardModal;