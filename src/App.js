import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewComp from './Components/NewComp';

class App extends React.Component{
  styles = {
    color: "red",
  };
  render(){
    return (
      <div className='App'>
        <h1 style={this.styles}>Hello</h1>
        <NewComp/>
      </div>
    );
  }
}

export default App;
