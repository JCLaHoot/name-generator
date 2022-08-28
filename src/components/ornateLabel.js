import React from "react";
import Frame from "./frame";



const OrnateLabel = (props) => {


    return (
        <div className="ornate-label">
            <Frame size='thin'>{props.children}</Frame>
        </div>
    )


};


export default OrnateLabel;
