import React, { Component } from 'react';
import NavBar from './components/navbar';

import './App.css';
import { render } from '@testing-library/react';
import Counters from './components/counters';

function App() {  state = {
  counters:
      [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
  
      ]
};
handleIncrement = counter => {
  const counters = [...this.state.counters];
  counters[0] = [...this.state.counters];
  counters[0].value++;
  console.log(this.state.counters[0]);
}
handleRest = () => {
 const counters =  this.state.counters.map(c => {
      c.value = 0;
      return c;
 });
  this.setState({ counters });
};
handleIncremet = counter =>{

  this.setState({counters: this.counters.map(c => {
      if(c.id === counter.id){
          return {...c, value: c.value +1}
      } else return c
  })})
  
};
  render()
  return (
    <React.Fragment>
    <NavBar />
<main className='container'> 
        <Counters
          onRest={this.handleRest}
          onIncrement={this.handleIncrement}
          ondelete={this.handleDelete} />
      </main>
      </React.Fragment>
  );
}

export default App;
