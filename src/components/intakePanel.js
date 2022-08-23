import React, {Component} from "react";
import OrnateLabel from "./ornateLabel";
import ValueListView from "./valueListView";

class IntakePanel extends Component {

    
    render() {
        // console.log(this.props.valueList);
        return (
            <div className="intake-panel">
                <OrnateLabel content={"Values"}/>
                <ValueListView valueList={this.props.valueList}/>
            </div>
            
        )
    }
}

export default IntakePanel;