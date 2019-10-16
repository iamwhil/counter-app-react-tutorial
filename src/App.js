import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      {id: 1, value: 4}, 
      {id: 2, value: 0},
      {id: 4, value: 0},
      {id: 3, value: 0}
    ]
  }

  constructor() {
    super()
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Ajax calls here typically
    console.log("App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
  }

  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value = 0
      return c
    })
    this.setState({counters})
  }

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID)
    this.setState({counters})
  }

  render() {
    console.log("App - Rendered")
    return (
      <Fragment>
        <NavBar totalCounters={ this.state.counters.filter(counter => counter.value > 0).length }/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement} 
            onReset={this.handleReset} 
            onDelete={this.handleDelete} 
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
