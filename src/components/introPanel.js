import React, {Component} from "react";
import OrnateLabel from "./ornateLabel";

class IntroPanel extends Component {
    render() {
        return (
            <div className="intro-panel">
                <OrnateLabel>Word Tagging Machine</OrnateLabel>
                <div>
                    <p>What values would you associate with the word “broccoli”? What about “spaghetti”, or “clementine”, or “doorknob”?</p>
                    <p>This machine lets you associate different values to words, to make the name generating machine smarter!</p>
                    <p>Happy word tagging!</p>
                </div>

            </div>
            
        )
    }
}

export default IntroPanel;