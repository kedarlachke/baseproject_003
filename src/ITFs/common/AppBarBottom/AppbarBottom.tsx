import React from 'react'
import './AppbarBottom.css'
function AppbarBottom() {
  return (
    <nav className="nav">
      <a href="#" className="nav__link">
        <i className="material-icons nav__icon">dashboard</i>
        <span className="nav__text">Dashboard</span>
      </a>
      <a href="#" className="nav__link nav__link--active">
        <i className="material-icons nav__icon">person</i>
        <span className="nav__text">Profile</span>
      </a>
      <a href="#" className="nav__link">
        <i className="material-icons nav__icon">devices</i>
        <span className="nav__text">Devices</span>
      </a>
      <a href="#" className="nav__link">
        <i className="material-icons nav__icon">lock</i>
        <span className="nav__text">Privacy</span>
      </a>
      <a href="#" className="nav__link">
        <i className="material-icons nav__icon">settings</i>
        <span className="nav__text">Settings</span>
      </a>
    </nav>
  )
}

export default AppbarBottom
