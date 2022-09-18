import React, {Component} from "react";
import Frame from "./frame";
import Spacer from "./spacer";

class ValueSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 0
        };
    }

    value = this.props.value;
    icon = null;




    innerRendering = () => {
        let active = false;

        (this.props.value) ? active = true : active = false;

        if (active) {
            return <div className="slider-content">
                <span className="icon">{this.props.value.icon}</span>
                <Spacer size='thin'/>
                <input type="range" min="1" max="5" value="2.5" className="slider"/>
            </div>;
        }
        else {
            return null
        }
    }


    render() {


        return (
            <div className="value-slider-plate">
                <Frame size="thin">
                {this.innerRendering(this.state.active)}
                </Frame>
            </div>

            
        )
    }
}

export default ValueSlider;