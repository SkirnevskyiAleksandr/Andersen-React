import React from "react";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 2
        }
    }
    nextNumber = () => {

        return this.setState({ counter: 3 })
    }
    render() {
        return (
            <>
                <h4 onClick={this.nextNumber}>{this.props.title} {this.state.counter}{console.log(React.Component)}</h4>
            </>
        )
    }
}

export default Header;


