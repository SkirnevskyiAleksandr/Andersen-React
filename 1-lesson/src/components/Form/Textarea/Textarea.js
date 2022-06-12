import React from "react";
import TextareaStyle from './Textarea.module.css'

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.changeInputValue = this.changeInputValue.bind(this);
    }
    changeInputValue(event) {
        console.log(event.target.value)
    }


    render() {
        return (
            <label htmlFor="" className={TextareaStyle.label}>
                {this.props.name}
                <textarea onChange={this.changeInputValue}
                    type={this.props.type}
                    name={this.props.name}
                    className={TextareaStyle.textarea}
                    placeholder={this.props.name}
                    rows={this.props.rows}
                />
            </label>
        )
    }
}

export default Textarea;