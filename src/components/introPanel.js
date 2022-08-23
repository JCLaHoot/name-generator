import React, {Component} from "react";
import OrnateLabel from "./ornateLabel";

class IntroPanel extends Component {
    render() {
        return (
            <div className="intro-panel">
                <OrnateLabel content={"Word Tagging Machine"}/>
            </div>
            
        )
    }
}

export default IntroPanel;