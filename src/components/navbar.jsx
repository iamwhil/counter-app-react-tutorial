import React, { Component, Fragment } from 'react';

// stateless functional component

const NavBar = ({ totalCounters }) => { 
  console.log("Navbar - Rendered")
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <span className="badge badge-pill badge-secondary">{ totalCounters }</span>
      </nav>
    </Fragment>
  )
}

// class NavBar extends Component {
//   render() {
    
//   }
// }

export default NavBar