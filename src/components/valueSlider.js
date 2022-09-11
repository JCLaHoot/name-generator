import React, {Component} from "react";
import Frame from "./frame";

class ValueSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            sliderValue: 0
        };
    }

    value = this.props.value;
    icon = null;


    getIcon = () => {
        if(this.props.value) {
            console.log('value-loaded');
            console.log(this.props.value.icon);
            return (this.props.value.icon);

        }
        else {
            console.log('no value')
        }

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
                    {this.getIcon()}
                {this.innerRendering(this.state.active)}
                </Frame>
            </div>

            
        )
    }
}

export default ValueSlider;