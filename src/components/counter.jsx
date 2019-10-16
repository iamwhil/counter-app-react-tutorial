import React, { Component, Fragment } from 'react'; 

class Counter extends Component {



  // constructor(props) {
  //   super();
  //   console.log(props)
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.state.value = props.value
  // }

  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + 1 })
  // }

  componentWillUnmount() {
    console.log("Counter - Unmount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Previous Props: ", prevProps)
    console.log("Previous State: ", prevState)
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Current Props: ", this.props)
      console.log("Component updated a prop!")
    }
  }

  render () {
    console.log("Counter - Rendered")
    return (
      <Fragment>
      {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          onClick={ () => this.props.onIncrement(this.props.counter) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button 
          onClick={ () => this.props.onDelete(this.props.counter.id) }
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </Fragment>
    );
  }

  getBadgeClasses() { 
    let classes = "min badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary"
    return classes 
  }

  formatCount() {
    const {value: c} = this.props.counter;
    return c === 0 ? "zero" : c;
  }

  theZero() {
    return (
      <Fragment>
        <h1><p>Zero</p></h1>
        <hr />
      </Fragment>
    )
  }

}

export default Counter;