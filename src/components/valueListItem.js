import React, {Component} from "react";

class ValueListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected : false
        };
    }
    
    pressAction = () => {
        let newSelectedState = this.state.selected ? false : true
        this.setState({selected : newSelectedState})
    }

    render() {
        return (
            <button className="value-list-item" onClick={this.pressAction}>
                {this.props.label ? this.props.label : "generic value"}
                {this.props.icon ? this.props.icon : "🔥"}
                { + this.state.selected ? "true" : "false"}
                
            </button>
            
        )
    }
}

export default ValueListItem;