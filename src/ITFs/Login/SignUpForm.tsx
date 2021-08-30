import React, { useState,useCallback } from 'react'
import { M_LeftIconRoundInput } from '../common/InputFields/RoundInput/RoundInput'
import {M_SocialMediaLogin} from './SocialMediaLogin'

import {userRegistration} from '../Redux/ActionCreators'
import {connect} from 'react-redux' 
const initobj = {
  applicationid : "15001500", client: "45004500" ,  lang: "EN",
  username: '',
  password: '',
  email: '',
  mobile:''
}
export function SignUpForm(props:any) {
  const [user, setUser] = useState(initobj)
  function updateUser(e: any) {
    let newuser: any = { ...user }
    newuser[e.target.name] = e.target.value
    setUser(newuser)
  
  }
console.log('props---->',props)
  const M_updateUser = useCallback((e)=>updateUser(e), [user])


  async function handleSubmit(){
    props.userResgistration(user)
  }


  return (
    <div className="form sign-up-form">
      <h2 className="title">Sign Up:{props.key1}</h2>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-user" name="username"  value={user.username} placeholder="Username"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-phone" name="mobile"  value={user.mobile} placeholder="Mobile No"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-envelope" name="email"  value={user.email} placeholder="Email"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-lock" name="password"  value={user.password} placeholder="Password"/> 
      <input type="button" value="Register" className="btn solid" onClick={()=>{handleSubmit()}}/>
      <M_SocialMediaLogin label="Sign up" />
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
    userResgistration :(user:any)=> dispatch((userRegistration(user)))
  }
}

export const M_SignUpForm = React.memo(connect(mapStateToProps,mapdispatcherToProp)(SignUpForm))
