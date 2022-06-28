import React from "react";

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(){
        this.props.deleteItem(this.props.item);
    }
    render() { 
        return (
            <li className="list-group-item text-start">
                {this.props.item}
                <button onClick={this.deleteItem} className="btn btn-danger btn-sm float-end">x</button>
            </li>
        );
    }
}
 
export default TodoItem;