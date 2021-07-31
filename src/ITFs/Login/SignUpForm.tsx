import React, { useState } from 'react'
import SocialMediaLogin from './SocialMediaLogin'
const initobj = {
  username: '',
  password: '',
}
export function SignUpForm() {
  const [user, setUser] = useState(initobj)
  function updateUser(e: any) {
    let newuser: any = { ...user }
    newuser[e.target.name] = e.target.value
    setUser(newuser)
    console.log(newuser)
  }
  return (
    <div className="form sign-up-form">
      <h2 className="title">Sign Up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={updateUser}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={updateUser}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input type="text" placeholder="Password" onChange={updateUser} />
      </div>
      <input
        type="button"
        value="Register"
        className="btn solid"
        name="password"
      />
      <SocialMediaLogin label="Sign up" />
    </div>
  )
}

export const M_SignUpForm = React.memo(SignUpForm)
