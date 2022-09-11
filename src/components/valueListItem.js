import React, {Component} from "react";

class ValueListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected : false
        };
    }

    value = this.props.value;
    
    pressAction = () => {
        let newSelectedState = this.state.selected ? false : true
        this.setState({selected : newSelectedState})

        this.props.callback(this.value, newSelectedState);
    }

    render() {

        let className = 'value-list-item';
        if (this.state.selected) {
          className += ' selected';
        }
        
        return (
            <button className={className} onClick={this.pressAction}>
                <span className={'icon'}>{this.value.icon ? this.value.icon : "🔥"}</span>
                <span className={'name'}>{this.value.name ? this.value.name : "generic value"}</span>
                               
            </button>
            
        )
    }
}

export default ValueListItem;