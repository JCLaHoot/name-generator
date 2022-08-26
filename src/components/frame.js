import React from "react";

const Frame = (props) => {

    let className;

    switch (props.size) {
        case 'thin' :
            className = 'thin';
            break;
        case 'thicc' :
            className = 'thicc';
            break;
        default :
            className = 'thicc';
    }


    return (
        <div className={`frame ${className}`}>
            {props.children}
        </div>
    )


};


export default Frame;
