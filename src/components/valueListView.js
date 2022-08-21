import React, {Component} from "react";
import ValueListItem from "./valueListItem";


class ValueListView extends Component {

    
    componentDidUpdate() {
        console.log(this.props.valueList);
        // console.log(Object.keys(this.props.valueList));
        // console.log(this.props.valueList)
        
        // for (const value in this.props.valueList) {
        //     // console.log(this.props.valueList[value]);
        //   }
        
    }

    valueListItems = () => {

        if(this.props.valueList) {
            let valueListItems = [];

            for (const i in this.props.valueList) {
                let value = this.props.valueList[i];

                valueListItems.push(<ValueListItem label={value.name} icon={value.icon}/>)

              }

            return (
               valueListItems 
            );
        } else {
              
            return null
        }


    }

    render() {
        return (
            <div className="values-list">
                <p>Values list</p>
                {this.valueListItems()}
                <ValueListItem label="love" icon="❤️"/>
                <ValueListItem/>
                <ValueListItem/>
                <ValueListItem/>
                
            </div>
            
        )
    }
}

export default ValueListView;