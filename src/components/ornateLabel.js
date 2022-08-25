import React from "react";
import Frame from "./frame";



const OrnateLabel = ({content}) => {


    return (
        <div className="ornate-label">
            <Frame size='thin'>{content}</Frame>
        </div>
    )


};


export default OrnateLabel;
