import React from "react";
import inputStyles from './Input.module.css';


class Input extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <label htmlFor="" className={inputStyles.label}>
                {this.props.name}
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className={inputStyles.input}
                    placeholder={this.props.name}
                    rows={this.props.rows}
                />
            </label>
        )
    }
}
Input.defaultProps = {
    type: "text"
}
export default Input