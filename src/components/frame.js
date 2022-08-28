import React from "react";

const Frame = (props) => {


    return (
        <div className={`frame ${props.size}`}>
            <div className="rivet"></div>
            <div className="rivet"></div>
            <div className="rivet"></div>
            <div className="rivet"></div>
            <div className="inner-content">
                {props.children}
            </div>
            
        </div>
    )


};


export default Frame;
