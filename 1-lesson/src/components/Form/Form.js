import React from 'react';
import formStyles from './Form.module.css';
import Input from '../Form/Input/Input.js';
// import Button from './Buttons/Button';
import Textarea from './Textarea/Textarea.js';


class Form extends React.Component {
	constructor(props) {
		super(props); Input
		this.state = {
			Name: null,
			LastName: null,
			Birthday: null,
			PhoneNumber: null,
			WebPage: null,
			ElevatorPitch: null,
			HurdSkills: null,
			YourLastProject: null,
			nameError: '',
			lastNameError: '',
			birthdayError: '',
			phoneError: '',
			webError: '',
			pitchError: '',
			skillsError: '',
			projectError: '',
			emptyValue: ''
		}
	}

	changeState = (name, value) => {
		this.setState({
			[name]: value
		})
	}

	isEmptyInput = () => {
		const objKeys = Object.values(this.state);

		if (objKeys.some((elem) => { return elem === null })) {
			this.setState({
				emptyValue: 'you have an empty value'
			})
		} else {
			this.setState({
				emptyValue: ''
			})
		}
	}

	clearFunction = () => {
		this.setState({
			Name: null,
			LastName: null,
			Birthday: null,
			PhoneNumber: null,
			WebPage: null,
			ElevatorPitch: null,
			HurdSkills: null,
			YourLastProject: null,
			nameError: '',
			lastNameError: '',
			birthdayError: '',
			phoneError: '',
			webError: '',
			pitchError: '',
			skillsError: '',
			projectError: '',
			emptyValue: ''
		})
	}

	render() {
		return (
			<form action="#" className={formStyles.main} method="post">
				<h2>Survey creation</h2>
				<Input name="Name" propsChange={this.changeState} propsError={this.state.nameError} propsErrorName='nameError' />
				<Input name="LastName" propsChange={this.changeState} propsError={this.state.lastNameError} propsErrorName='lastNameError' />
				<Input name="Birthday" type="date" propsChange={this.changeState} propsError={this.state.birthdayError} propsErrorName='birthdayError' />
				<Input name="PhoneNumber" type="tel" symbolLength={12} propsChange={this.changeState} propsError={this.state.phoneError} propsErrorName='phoneError' />
				<Input name="WebPage" type="url" propsChange={this.changeState} propsError={this.state.webError} propsErrorName='webError' />
				<Textarea name="ElevatorPitch" type="textarea" rows='7' symbolLength={600} propsChange={this.changeState} propsError={this.state.pitchError} propsErrorName='pitchError' />
				<Textarea name="HurdSkills" type='textarea' rows='7' symbolLength={600} propsChange={this.changeState} propsError={this.state.skillsError} propsErrorName='skillsError' />
				<Textarea name="YourLastProject" type='textarea' rows='7' symbolLength={600} propsChange={this.changeState} propsError={this.state.projectError} propsErrorName='projectError' />
				<div className={formStyles.button_wrapper}>
					<button onClick={this.clearFunction} className={formStyles.btn} style={{ backgroundColor: 'red' }} type="reset" >Clear</button>
					<button onClick={this.isEmptyInput} className={formStyles.btn} type="button">Save</button>
				</div>
				<div className={formStyles.emptyValue}>{this.state.emptyValue}</div>
			</form>
		);
	}
}

export default Form;


