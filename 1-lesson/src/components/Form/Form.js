import React from 'react';
import formStyles from './Form.module.css';
import Input from '../Form/Input/Input.js';
import Button from './Buttons/Button';
import Textarea from './Textarea/Textarea.js';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 2
		};
	}
	nextNumber = () => {

		return this.setState({ counter: 3 });
	};
	render() {
		return (
			<form action="#" className={formStyles.main} method="post">
				<h2>Survey creation</h2>
				<Input name="Name" />
				<Input name="Last name" />
				<Input name="Birthday" type="date" />
				<Input name="Phone number" type="tel" />
				<Input name="Web-page" type="url" />
				<Textarea name="Elevator pitch" type="textarea" rows='7' />
				<Textarea name="Hurd skills" type='textarea' rows='7' />
				<Textarea name="Your last project" type='textarea' rows='7' />
				<div className={formStyles.button_wrapper}>
					<Button name="Clear" color="red" />
					<Button name="Save" />
				</div>

			</form>
		);
	}
}

export default Form;


