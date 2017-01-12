import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import logo from '../../images/HelloPantryRound_T.png'

const Header = () => {
  return (
    <div className="section group header">
      <div className="row flush-left">
        <div className="col span-1-of-4">
          <Link to='/home'><img className="header-logo" src={logo} alt="Logo" /></Link>
        </div>
        <div className="col span-2-of-4">
            <Link className="header-link" to='/login'>LOG IN</Link>
        </div>
        <div className="col span-1-of-4">
            <Link className="header-link" to='/signup'>SIGN UP</Link>
        </div>
      </div>
    </div>    
  )
}

module.exports = Header
