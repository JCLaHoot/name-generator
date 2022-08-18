import React, {Component} from "react";
import ValueListItem from "./valueListItem";


class ValuesList extends Component {

    
    render() {
        return (
            <div className="values-list">
                <p>Values list</p>
                <ValueListItem label="love" icon="❤️"/>
                <ValueListItem/>
                <ValueListItem/>
                <ValueListItem/>
                
            </div>
            
        )
    }
}

export default ValuesList;