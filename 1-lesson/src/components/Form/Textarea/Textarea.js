import React from "react";
import TextareaStyle from './Textarea.module.css'

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 0,
            errorValue: '',
            readOnly: false
        }
    }

    inputValueCounter = (event) => {
        if (event.target.value.length + 1 > this.props.symbolLength) {
            this.setState({
                inputValue: event.target.value.length,
                errorValue: `you should enter not more than 600 symbols`
            })
        } else {
            this.setState({
                inputValue: event.target.value.length,
                errorValue: ``
            })
        }
    }


    render() {
        return (
            <label htmlFor="" className={TextareaStyle.label}>
                {this.props.name}
                <textarea onChange={this.inputValueCounter}
                    maxLength={this.props.symbolLength}
                    type={this.props.type}
                    name={this.props.name}
                    className={TextareaStyle.textarea}
                    placeholder={this.props.name}
                    rows={this.props.rows}
                    readOnly={this.state.readOnly}
                />
                <div className={TextareaStyle.count}>
                    <div className={TextareaStyle.warning}>
                        {this.state.errorValue}
                    </div>
                    <div>
                        <span>{this.state.inputValue}</span>
                        <span >/ {this.props.symbolLength}</span>
                    </div>
                </div>
            </label>
        )
    }
}

export default Textarea;