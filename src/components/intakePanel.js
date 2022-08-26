import React, {Component} from "react";
import Frame from "./frame";
import OrnateLabel from "./ornateLabel";
import ValueListView from "./valueListView";

class IntakePanel extends Component {

    
    render() {
        // console.log(this.props.valueList);
        return (
            <Frame>
            <div className="intake-panel">
                <OrnateLabel>Values</OrnateLabel>
                <ValueListView valueList={this.props.valueList}/>
            </div>
            </Frame>

            
        )
    }
}

export default IntakePanel;