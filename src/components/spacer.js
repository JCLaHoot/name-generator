import React from "react";

const Spacer = (props) => {


    return (
        <div className={`spacer ${props.size}`}>
            <div className="rivet"></div>
            <div className="rivet"></div>
        </div>
    )


};


export default Spacer;
