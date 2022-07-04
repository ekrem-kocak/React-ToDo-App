import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.taskDone = this.taskDone.bind(this);
    }
    deleteItem() {
        this.props.deleteItem(this.props.item);
    }

    taskDone() {
        this.props.taskDone(this.props.item)
    }

    render() {
        return (
            <li className={this.props.item.action ? 'list-group-item text-start text-success' : 'list-group-item text-start text-danger'}>
                {
                    this.props.item.name
                }

                <div className="float-end">
                    <button onClick={this.taskDone} className="btn btn-sm btn-success me-2">
                        o
                    </button>
                    <button onClick={this.deleteItem} className="btn btn-sm btn-danger">
                        x
                    </button>
                </div>
            </li>
        );
    }
}

export default TodoItem;