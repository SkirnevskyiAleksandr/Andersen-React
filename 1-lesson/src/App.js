import React from 'react';
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <Header title='hello first team' />
        <Header title='hello second team' />
      </>
    );
  }
}

export default App;
