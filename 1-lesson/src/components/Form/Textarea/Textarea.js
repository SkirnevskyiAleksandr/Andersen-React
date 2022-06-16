import React from "react";
import TextareaStyle from './Textarea.module.css'

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            readOnly: false,
            inputValue: 0
        }
    }

    handleChange = (event) => {
        this.inputValueCounter(event)
        this.props.propsChange(this.props.name, event.target.value)
    }

    inputValueCounter = (event) => {
        const noTrim = event.target.value.trim();

        if (noTrim.length === this.props.symbolLength) {
            this.setState({
                inputValue: noTrim.length,
            })
            this.props.propsChange(this.props.propsErrorName, 'you should enter not more than 600 symbols')
        } else {
            this.setState({
                inputValue: noTrim.length,
            })
            this.props.propsChange(this.props.propsErrorName, '')
        }
    }

    render() {
        return (
            <label htmlFor="" className={TextareaStyle.label}>
                {this.props.name}
                <textarea onChange={this.handleChange}
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
                        {this.props.propsError}
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