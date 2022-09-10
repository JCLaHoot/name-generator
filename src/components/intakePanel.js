import React, {Component} from "react";
import Frame from "./frame";
import OrnateLabel from "./ornateLabel";
import ValueListView from "./valueListView";

class IntakePanel extends Component {

    tagging = this.props.tagging;

    wordToTag = () => {
        if (this.props.tagging) {
            return (
                <div className="name-intake-block">
                    <OrnateLabel>Word To Tag</OrnateLabel>
                    <Frame size='thin'>
                        <input></input> 
                    </Frame>
                    
                </div>
            )
        }
    } 

    
    render() {
        // console.log(this.props.valueList);
        return (
            
            <div className="intake-panel">
                {/* <Frame size='thicc'> */}
                    {this.wordToTag()}
                    <div className="values-block">
                        <OrnateLabel>Values</OrnateLabel>
                        <ValueListView valueList={this.props.valueList} updateSelectedValues={this.props.updateSelectedValues}/>
                    </div>
                {/* </Frame> */}

            </div>

            
        )
    }
}

export default IntakePanel;