import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Action from "./Action";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }
    state = {
        title: 'TodoApp',
        items: []
    }

    deleteItem(item) {
        var arr = this.state.items.filter(i => {
            return i != item
        });
        console.log(arr);
        this.setState({
            items: arr
        })
    }

    addItem(itemName) {
        if (!itemName) {
            return 'Bir değer girmeniz gerekmektedir';
        } else if (this.state.items.indexOf(itemName) > -1) {
            return 'Bu görev zaten mevcut';
        } else {
            // this.state.items.push(itemName);
            this.setState({
                items: this.state.items.concat(itemName)
            })
        }
    }

    clearAll() {
        this.setState({
            items: []
        })
    }

    render() {
        return (
            <div className="container mt-4 text-center">
                <div className="card">
                    <div className="card-header">
                        <Header title={this.state.title} />
                    </div>
                    <div className="card-body">
                        <TodoList items={this.state.items} deleteItem={this.deleteItem} clearAll={this.clearAll} />
                    </div>
                    <div className="card-footer">
                        <Action addItem={this.addItem} />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let localItems = JSON.parse(localStorage.getItem('items'));
        if(localItems){
            this.setState({
                items: localItems 
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.items.length);
        console.log(this.state.items.length);
        if (prevState.items.length !== this.state.items.length) {
            localStorage.setItem('items', JSON.stringify(this.state.items));
        }
    }
}

export default TodoApp;