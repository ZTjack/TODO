import React, {Component} from "react";
import Todo from "./todo";

export default class TODOIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="slogan">
                    Just Do It
                </div>
                <div className="lists">
                    <Todo type="important-urgent" key="important-urgent" title="很重要-很紧急"/>
                    <Todo type="important-non-urgent" key="important-non-urgent" title="重要-不紧急"/>
                    <Todo type="non-important-urgent" key="non-important-urgent" title="不重要-紧急"/>
                    <Todo type="non-important-non-urgent" key="non-important-non-urgent" title="不重要-不紧急"/>
                </div>
            </div>
        );
    }
}


