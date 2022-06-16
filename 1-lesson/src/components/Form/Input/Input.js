import React from "react";
import inputStyles from './Input.module.css';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorValue: ''
        }
    }

    textValidator = (event) => {
        const inputValue = event.target.value.trim();
        const firstSymbol = inputValue.charAt(0);

        if (firstSymbol !== firstSymbol.toUpperCase()) {
            this.props.propsChange(this.props.propsErrorName, 'First symbol should be capital')
            return;
        } else {
            this.props.propsChange(this.props.propsErrorName, '')
        }
    }

    telValidator = (event) => {
        const telInput = event.target.value.split(' ').join('');

        if (Number.isNaN(+telInput)) {
            this.props.propsChange(this.props.propsErrorName, 'you must enter only numbers')
            return;
        } else {
            this.props.propsChange(this.props.propsErrorName, '')
        }
    }

    urlValidator = (event) => {
        const inputTrimValue = event.target.value.trim();

        if (!inputTrimValue.startsWith("https://") && inputTrimValue.length !== 0) {
            this.props.propsChange(this.props.propsErrorName, 'you must enter: "https://"')
        } else {
            this.props.propsChange(this.props.propsErrorName, '')
        }
    }

    validator = (event) => {
        switch (this.props.type) {
            case 'text':
                this.textValidator(event)
                this.setState({
                    textInputValue: event.target.value
                })
                break;
            case 'tel':
                this.telValidator(event)
                this.setState({
                    telInputValue: event.target.value
                })
                break;
            case 'url':
                this.urlValidator(event)
                this.setState({
                    urlInputValue: event.target.value
                })
        }
    }
    handleChange = (event) => {
        this.validator(event)
        this.props.propsChange(this.props.name, event.target.value)
    }

    render() {
        return (
            <label htmlFor="" className={inputStyles.label}>
                {this.props.name}
                <input onChange={this.handleChange}
                    maxLength={this.props.symbolLength}
                    type={this.props.type}
                    name={this.props.name}
                    className={inputStyles.input}
                    placeholder={this.props.name}
                    rows={this.props.rows}
                />
                <div className={inputStyles.warning}>{this.props.propsError}</div>
            </label>
        )
    }
}
Input.defaultProps = {
    type: "text"
}
export default Input