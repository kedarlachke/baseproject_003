import React, { useContext } from 'react'
import usering from '../../../img/2.jpg'
export default function Header(props: any) {
  const { title } = props
  return (
    <header>
      <h2>
        <label htmlFor="nav-toggle">
          <span className="las la-bars"></span>
        </label>
        {title}
      </h2>
      <div className="search-wrapper">
        <span className="las la-search"></span>
        <input type="search" placeholder="Search here" />
      </div>
      <div className="user-wrapper">
        <img src={usering} alt="" width="40px" height="40px" />
        <div>
          <h4>Kedar Lachke</h4>
          <small>super admin</small>
        </div>
      </div>
    </header>
  )
}
