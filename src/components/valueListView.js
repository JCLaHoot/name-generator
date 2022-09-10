import React, {Component} from "react";
import ValueListItem from "./valueListItem";
import Frame from "./frame";
import Spacer from "./spacer";


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

                // adds a spacer between all items 
                if(valueListItems.length){
                    valueListItems.push(<Spacer size='thin'/>);
                }

                valueListItems.push(<ValueListItem label={value.name} icon={value.icon} updateSelectedValues={this.props.updateSelectedValues}/>)
                // valueListItems.push(<Spacer size='thin'/>)
                

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
            // <Frame size='thin'>
                <div className="values-list">
                    {this.valueListItems()}
                </div>
            // </Frame>
            
        )
    }
}

export default ValueListView;