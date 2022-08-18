import React, {Component} from "react";
import ValuesList from "./valuesList";

class IntakePanel extends Component {
    render() {
        return (
            <div className="intake-panel">
                <p>intake panel</p>
                <ValuesList/>
            </div>
            
        )
    }
}

export default IntakePanel;