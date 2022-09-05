import React, {Component} from "react";
import Frame from "./frame";

class ValueSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            value: null,
            icon: null,
            sliderValue: 0
        };
    }


    innerRendering = (active) => {
        if (active) {
            return <div>Actual values slider 
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