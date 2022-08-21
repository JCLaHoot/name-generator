import React, {Component} from "react";
import ValueListView from "./valueListView";

class IntakePanel extends Component {

    
    render() {
        // console.log(this.props.valueList);
        return (
            <div className="intake-panel">
                <p>intake panel</p>
                <ValueListView valueList={this.props.valueList}/>
            </div>
            
        )
    }
}

export default IntakePanel;