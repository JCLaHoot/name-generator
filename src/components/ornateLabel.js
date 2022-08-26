import React from "react";
import Frame from "./frame";



const OrnateLabel = (props) => {


    return (
        <div className="ornate-label">
            <Frame size='thin'><span className="inner-content">{props.children}</span></Frame>
        </div>
    )


};


export default OrnateLabel;
