import React from 'react';
import formStyles from './Form.module.css';
import Input from '../Form/Input/Input.js';
// import Button from './Buttons/Button';
import Textarea from './Textarea/Textarea.js';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.inputNameValue = React.createRef()
	}

	onClikl = () => {
		const mainState = {
			textInputValue: this.inputNameValue.current.state.textInputValue,
			telInputValue: this.inputNameValue.current.state.telInputValue,
			urlInputValue: this.inputNameValue.current.state.urlInputValue
		}
		console.log(this.inputNameValue.current.state)

	}

	render() {
		return (
			<form action="#" className={formStyles.main} method="post">
				<h2>Survey creation</h2>
				<Input name="Name" ref={this.inputNameValue} />
				<Input name="Last name" ref={this.inputNameValue} />
				<Input name="Birthday" type="date" />
				<Input name="Phone number" type="tel" symbolLength={12} ref={this.inputNameValue} />
				<Input name="Web-page" type="url" ref={this.inputNameValue} />
				<Textarea name="Elevator pitch" type="textarea" rows='7' symbolLength={600} />
				<Textarea name="Hurd skills" type='textarea' rows='7' symbolLength={600} />
				<Textarea name="Your last project" type='textarea' rows='7' symbolLength={600} />
				<div className={formStyles.button_wrapper}>
					<button className={formStyles.btn} style={{ backgroundColor: 'red' }} type="reset" >Clear</button>
					<button onClick={this.onClikl} className={formStyles.btn} type="button">Save</button>
				</div>
			</form>
		);
	}
}

export default Form;


