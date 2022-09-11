import React, {Component} from "react";
import ValueSlider from "./valueSlider";

class ValuesPanel extends Component {

    selectedValues = this.props.selectedValues;

    componentDidUpdate ( ) {
        console.log('values panel update')
    }


    renderSliders = () => {
        let sliders = []

        for (let i = 0; i < 8; i++) {
            let value = null
            if (this.selectedValues[i]) {
                value = this.selectedValues[i];
                // console.log(value);
            }

            sliders.push(<ValueSlider value={value}/>)
            
        }
        return (sliders);
    }



    render() {
        return (
            <div className="values-panel">
                {this.renderSliders()}
            </div>
            
        )
    }
}

export default ValuesPanel;