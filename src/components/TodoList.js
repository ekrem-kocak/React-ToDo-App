import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

    }

    getUnfinishedCount() {
        let count = 0;
        this.props.items.forEach(i => {
            if (!i.action)
                count++
        });
        return count;
    }
    
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.getUnfinishedCount() > 0 || this.props.showAll ?
                            this.props.items.map((i, index) => {
                                if (!this.props.showAll) {
                                    if (!i.action)
                                        return <TodoItem deleteItem={this.props.deleteItem} taskDone={this.props.taskDone} item={i} key={index} />
                                }
                                else {
                                    return <TodoItem deleteItem={this.props.deleteItem} taskDone={this.props.taskDone} item={i} key={index} />
                                }
                            })
                            :
                            <div className="alert alert-warning">
                                {this.props.items.length > 0 ? 'Tüm Görevler Yapıldı' : "Yeni bir görev ekleyiniz"}
                            </div>
                    }

                </ul>

                <div className="my-3">
                    <h6 className="d-inline-block">Tamamlanan Görev Sayısı: <span className="badge bg-success">{this.props.items.length - this.getUnfinishedCount()}</span></h6>

                    {
                        this.getUnfinishedCount() > 0 &&
                        <button onClick={this.props.clearAll} className="btn btn-outline-danger float-end">Hepsini Temizle</button>
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;