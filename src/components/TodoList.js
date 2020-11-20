import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import ToDoItem from "./ToDoItem";
import "/home/portia/todo-dnd/src/components/css/ToDoList.css";
// import {onDragStart} from "./methods";

 
class TodoList extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      items: [],
      complete: []
    };
   
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

      onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    // onDrop = (ev, cat) => {
    //   let id = ev.dataTransfer.getData("id");
      
    //   let tasks = this.state.tasks.filter((task) => {
    //       if (task.name == id) {
    //           task.category = cat;
    //       }
    //       return task;
    //   });

    //   this.setState({
    //       ...this.state,
    //       tasks
    //   });
    // }

  render() {
    return (
    <div className="todoListMain">
        <div className="header">

          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
             placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <div id="example-drag" draggable="true" onDragOver={(e)=>this.onDragOver(e)}>
          Dragzone
            <ToDoItem entries={this.state.items}
            delete={this.deleteItem}  className="drag"/>
            </div>

            <div className="drop" onDragOver={(e)=>this.onDragOver(e)}>
              Dropzone
            </div>
      </div>

    );
  }
}
 
export default TodoList;