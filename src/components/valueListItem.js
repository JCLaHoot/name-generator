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

        let className = 'value-list-item';
        if (this.state.selected) {
          className += ' selected';
        }
        
        return (
            <button className={className} onClick={this.pressAction}>
                {this.props.icon ? this.props.icon : "🔥"}
                {this.props.label ? this.props.label : "generic value"}                
            </button>
            
        )
    }
}

export default ValueListItem;