import React from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Table from './components/Table/Table'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      flag: false,
      formState: ''
    }
  }

  changeFlag = (value) => {
    this.setState({
      flag: value
    })
  }

  updateState = (value) => {
    this.setState({
      formState: value
    })
  }

  render() {
    if (this.state.flag) {
      return <Table inputValue={this.state.formState} />;
    }

    return <Form tableFlag={this.changeFlag} formState={this.updateState} />;
  }
}

export default App;
