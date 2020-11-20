import { Card } from "@material-ui/core";
import React, { Component } from "react";
import FlipMove from "react-flip-move";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} 
        key={item.key}>{item.text}</li>
    }
    
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
    
        return (
            <Card>
                <ul className="theList">
                    <FlipMove duration={600} easing="ease-out">
                    {listItems}
                    </FlipMove>
                </ul>
            </Card>
        );
    }
};
 
export default TodoItems;