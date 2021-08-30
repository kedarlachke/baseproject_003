import React, { useState, useCallback} from 'react'
import { M_LeftIconRoundInput } from '../common/InputFields/RoundInput/RoundInput'
import {M_SocialMediaLogin} from './SocialMediaLogin'
import {connect} from 'react-redux'
import {userSignIn} from '../Redux/ActionCreators'
const initobj = {
  applicationid : "15001500", client: "45004500" ,  lang: "EN",
  username: '',
  password: '',
}
export function SignInForm(props:any) {
  const [user, setUser] = useState(initobj)

  function updateUser(e: any) {
    let newuser: any = { ...user }
    newuser[e.target.name] = e.target.value
    setUser(newuser)
    //console.log(newuser)
  }
 
  
    const M_updateUser = useCallback((e)=>updateUser(e), [user])
  return (
    <div className="form sign-in-form">
      <h2 className="title">Sign In</h2>
      <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-user" name="username"  value={user.username} placeholder="Username"/>
      <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-lock" name="password"  value={user.password} placeholder="Password"/>
      <input type="button" value="Login" className="btn solid" onClick={()=>{props.userSignIn(user)}}/>
      <M_SocialMediaLogin label="Login" />
    </div>
  )
}

const mapStateToProps=(state:any)=>{
  console.log(state)
  return {
    key1:state.key,
    loginSuccess:state.loginSuccess
  }
}

const mapdispatcherToProp=(dispatch:any)=>{
  return {
    userSignIn :(user:any)=> dispatch((userSignIn(user)))
  }
}
export const M_SignInForm = React.memo(connect(mapStateToProps,mapdispatcherToProp)(SignInForm))
