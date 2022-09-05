import React, {Component} from "react";
import ValueSlider from "./valueSlider";

class ValuesPanel extends Component {
    render() {
        return (
            <div className="values-panel">
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
                <ValueSlider/>
            </div>
            
        )
    }
}

export default ValuesPanel;