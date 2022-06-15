import React from "react";
import inputStyles from './Input.module.css';


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    isEmptyValidator(event) { }

    textValidator = (event) => {
        const inputValue = event.target.value.trim();
        const firstSymbol = inputValue.charAt(0);

        // if (parseInt(inputValue)) {
        //     this.setState({
        //         value: `You must enter only letters`
        //     })
        //     return;
        // } else {
        //     this.setState({
        //         value: ''
        //     })
        // }

        if (firstSymbol !== firstSymbol.toUpperCase()) {
            this.setState({
                value: `First symbol should be capital `
            })
            return;
        } else {
            this.setState({
                value: ''
            })
        }
    }

    telValidator = (event) => {
        const telInput = event.target.value.split(' ').join('');

        if (Number.isNaN(+telInput)) {
            this.setState({
                value: `you must enter only numbers `
            })
            return;
        } else {
            this.setState({
                value: ``
            })
        }

        // if (event.target.value.length !== 12) {
        //     this.setState({
        //         value: `you must enter 12 numbers `
        //     })
        // } else {
        //     this.setState({
        //         value: ``
        //     })
        // }
    }
    urlValidator = (event) => {
        const inputTrimValue = event.target.value.trim()
        if (!inputTrimValue.startsWith("https://") && inputTrimValue.length !== 0) {
            this.setState({
                value: `you must enter: "https://" `
            })
        } else {
            this.setState({
                value: ``
            })
        }
    }

    validator = (event) => {
        switch (this.props.type) {
            case 'text':
                this.textValidator(event)
                break;

            case 'tel':
                this.telValidator(event)
                break;
            case 'url':
                this.urlValidator(event)

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
                <div className={inputStyles.warning}>{this.state.value}</div>
            </label>
        )
    }
}
Input.defaultProps = {
    type: "text"
}
export default Input