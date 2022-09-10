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
        this.props.updateSelectedValues();
    }

    render() {

        let className = 'value-list-item';
        if (this.state.selected) {
          className += ' selected';
        }
        
        return (
            <button className={className} onClick={this.pressAction}>
                <span className={'icon'}>{this.props.icon ? this.props.icon : "🔥"}</span>
                <span className={'name'}>{this.props.label ? this.props.label : "generic value"}</span>
                               
            </button>
            
        )
    }
}

export default ValueListItem;