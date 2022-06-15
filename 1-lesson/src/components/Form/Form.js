import React from 'react';
import formStyles from './Form.module.css';
import Input from '../Form/Input/Input.js';
import Button from './Buttons/Button';
import Textarea from './Textarea/Textarea.js';


class Form extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		counter: 2
	// 	};
	// }

	// clearFunction = () => {
	// 	console.log(`rrt`)
	// }

	render() {
		return (
			<form action="#" className={formStyles.main} method="post">
				<h2>Survey creation</h2>
				<Input name="Name" />
				<Input name="Last name" />
				<Input name="Birthday" type="date" />
				<Input name="Phone number" type="tel" symbolLength={12} />
				<Input name="Web-page" type="url" />
				<Textarea name="Elevator pitch" type="textarea" rows='7' symbolLength={600} />
				<Textarea name="Hurd skills" type='textarea' rows='7' symbolLength={600} />
				<Textarea name="Your last project" type='textarea' rows='7' symbolLength={600} />
				<div className={formStyles.button_wrapper}>
					<Button name="Clear" color="red" type="reset" />
					<Button name="Save" type="button" />
				</div>
			</form>
		);
	}
}

export default Form;


