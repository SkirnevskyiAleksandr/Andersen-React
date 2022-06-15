import React from "react";
import inputStyles from './Input.module.css';


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorValue: '',
            textInputValue: '',
            telInputValue: '',
            urlInputValue: ''
        }
    }

    textValidator = (event) => {
        const inputValue = event.target.value.trim();
        const firstSymbol = inputValue.charAt(0);

        if (firstSymbol !== firstSymbol.toUpperCase()) {
            this.setState({
                errorValue: `First symbol should be capital `
            })
            return;
        } else {
            this.setState({
                errorValue: ''
            })
        }
    }

    telValidator = (event) => {
        const telInput = event.target.value.split(' ').join('');

        if (Number.isNaN(+telInput)) {
            this.setState({
                errorValue: `you must enter only numbers `
            })
            return;
        } else {
            this.setState({
                errorValue: ``
            })
        }
    }

    urlValidator = (event) => {
        const inputTrimValue = event.target.value.trim();

        if (!inputTrimValue.startsWith("https://") && inputTrimValue.length !== 0) {
            this.setState({
                errorValue: `you must enter: "https://" `
            })
        } else {
            this.setState({
                errorValue: ``
            })
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

    render() {
        return (
            <label htmlFor="" className={inputStyles.label}>
                {this.props.name}
                <input onChange={this.validator}
                    maxLength={this.props.symbolLength}
                    type={this.props.type}
                    name={this.props.name}
                    className={inputStyles.input}
                    placeholder={this.props.name}
                    rows={this.props.rows}
                />
                <div className={inputStyles.warning}>{this.state.errorValue}</div>
            </label>
        )
    }
}
Input.defaultProps = {
    type: "text"
}
export default Input