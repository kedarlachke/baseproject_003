import React, { useState } from 'react'
import SocialMediaLogin from './SocialMediaLogin'
const initobj = {
  username: '',
  password: '',
}
export function SignInForm() {
  const [user, setUser] = useState(initobj)

  function updateUser(e: any) {
    let newuser: any = { ...user }
    newuser[e.target.name] = e.target.value
    setUser(newuser)
    console.log(newuser)
  }
  return (
    <div className="form sign-in-form">
      <h2 className="title">Sign In</h2>
      <div className="input-field">
        <i className="fas fa-user" />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={updateUser}
          value={user.username}
          autoComplete="flase"
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={updateUser}
          value={user.password}
        />
      </div>
      <input type="button" value="Login" className="btn solid" />

      <SocialMediaLogin label="Login" />
    </div>
  )
}

export const M_SignInForm = React.memo(SignInForm)
