import React from 'react'
import NavLink from './Utils/NavLink.js'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },
  render () {
    return (
      <div className='mainApp'>
        <div className='navbar'>
          <nav>
            <NavLink onlyActiveOnIndex to='/'>Main</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/calendar'>Calendar</NavLink>
          </nav>
        </div>
        <div className='tasksList'>
          {this.props.children}
        </div>
      </div>
    )
  }
})
