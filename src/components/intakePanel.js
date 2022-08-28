import React, {Component} from "react";
import Frame from "./frame";
import OrnateLabel from "./ornateLabel";
import ValueListView from "./valueListView";

class IntakePanel extends Component {

    
    render() {
        // console.log(this.props.valueList);
        return (
            
            <div className="intake-panel">
                {/* <Frame size='thicc'> */}
                    <div className="values-block">
                        <OrnateLabel>Values</OrnateLabel>
                        <ValueListView valueList={this.props.valueList}/>
                    </div>
                {/* </Frame> */}

            </div>

            
        )
    }
}

export default IntakePanel;