import React from "react";

class Action extends React.Component {
    state = {
        err: ''
    }
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        const task = document.getElementById('newTask').value;
        let res = this.props.addItem(task);

        if (res) {
            this.setState({
                err: res
            })
        }else{
            this.setState({
                err: ''
            })
        }

        document.getElementById('newTask').value = '';
    }

    render() {
        return (
            <form>
                <div className="input-group mb-3">
                    <input id="newTask" type="text" className="form-control" placeholder="Bir görev giriniz.." />
                    <button onClick={this.addItem} className="btn btn-outline-primary" type="submit">Ekle</button>
                </div>
                {
                    this.state.err.length > 0 && <div className="alert alert-danger">
                        {this.state.err}
                    </div>
                }
            </form>
        );
    }
}

export default Action;