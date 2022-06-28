import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.clearAll = this.clearAll.bind(this);
    }

    clearAll(){
        this.props.clearAll();
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.length > 0 ?
                            this.props.items.map((item, index) => {
                                return <TodoItem key={index} deleteItem={this.props.deleteItem} item={item} />
                            })
                            :
                            <div className="alert alert-warning">
                                Bir görev ekleyiniz..
                            </div>
                    }
                </ul>
                {
                    this.props.items.length > 0 &&
                    <button onClick={this.clearAll} className="btn btn-outline-danger float-end mt-3">Hepsini Temizle</button>
                }
            </div>
        );
    }
}

export default TodoList;