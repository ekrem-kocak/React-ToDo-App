import React from "react";

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.showAllChange = this.showAllChange.bind(this);

    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.addItem(e.target[0].value);
        e.target[0].value = '';
    }

    showAllChange(){
        this.props.showAllChange();
    }

    render() {
        return (
            <div>
                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" checked={this.props.showAll} onChange={this.showAllChange} />
                        <label className="form-check-label">
                            Tüm Görevleri Göster
                        </label>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Görev giriniz.." />
                        <button className="btn btn-outline-primary" type="submit">Ekle</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Action;