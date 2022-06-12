import React from "react";
import buttonStyle from './Button.module.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button style={{ backgroundColor: this.props.color }} className={buttonStyle.btn}>{this.props.name}</button>
        )
    }
}

export default Button;