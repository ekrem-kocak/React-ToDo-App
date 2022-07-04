import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>
                    {this.props.title}
                </h1>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        );
    }
}

export default Header;