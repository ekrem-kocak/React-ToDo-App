import React from "react";

import Header from "./Header";
import TodoList from "./TodoList";
import Action from "./Action";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.taskDone = this.taskDone.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.showAllChange = this.showAllChange.bind(this);
    }
    state = {
        title: "Todo App !!",
        items: [
            {
                name: "item1",
                action: true
            },
            {
                name: "item2",
                action: false
            }
        ],
        showAll: false
    }

    deleteItem(i) {
        this.setState({
            items: this.state.items.filter(item => {
                return i !== item;
            })
        })
    }

    addItem(i) {
        let newItem = {
            name: i,
            action: false
        }
        this.setState({
            items: this.state.items.concat(newItem)
        })
    }

    taskDone(i) {
        this.state.items.find(x => x == i).action = true;
        this.setState({
            items: this.state.items
        })
    }

    clearAll() {
        this.setState({
            items: []
        })
    }

    showAllChange() {

        let newState = this.state.showAll ? false : true

        this.setState({
            showAll: newState
        })
    }

    render() {
        return (
            <div className="row">
                <div className="card p-3 col-md-6 col-4 mx-auto">
                    <div className="card-title">
                        <Header title={this.state.title} />
                    </div>
                    <div className="card-body">
                        <TodoList deleteItem={this.deleteItem} items={this.state.items} taskDone={this.taskDone} clearAll={this.clearAll} showAll={this.state.showAll}/>
                    </div>
                    <div className="card-footer bg-white">
                        <Action addItem={this.addItem} showAll={this.state.showAll} showAllChange={this.showAllChange} />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let items = JSON.parse(localStorage.getItem('items'));
        if (items) {
            this.setState({
                items: items
            })
        }
    }

    componentDidUpdate() {
        localStorage.setItem("items", JSON.stringify(this.state.items));
    }
}

export default TodoApp;