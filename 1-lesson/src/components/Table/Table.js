import React from "react";
import TableStyle from './Table.module.css'

class Table extends React.Component {
    render() {
        return (
            <div className={TableStyle.main}>
                <h1>{this.props.inputValue.Name} {this.props.inputValue.LastName}</h1>
                <ul>
                    <li><span>birthday: </span> {this.props.inputValue.Birthday}</li>
                    <li><span>phone-number: </span> {this.props.inputValue.PhoneNumber}</li>
                    <li><span>web-page: </span> {this.props.inputValue.WebPage}</li>
                    <li><span>elevator-pitch: </span> <p>{this.props.inputValue.ElevatorPitch}</p> </li>
                    <li><span>hurd-skills: </span><p>{this.props.inputValue.HurdSkills}</p> </li>
                    <li><span>Your last project: </span> <p>{this.props.inputValue.YourLastProject}</p></li>
                </ul>
            </div>
        )
    }
}

export default Table