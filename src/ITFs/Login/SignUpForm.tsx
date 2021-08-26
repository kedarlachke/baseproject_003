import React, { useState,useCallback } from 'react'
import { M_LeftIconRoundInput } from '../common/InputFields/RoundInput/RoundInput'
import {M_SocialMediaLogin} from './SocialMediaLogin'
import {execGql,execGql_xx} from '../gqlclientconfig';
import SignUpUsernameJWT from '../mutations/signUpUsernameJWT';
const initobj = {
  applicationid : "15001500", client: "45004500" ,  lang: "EN",
  username: '',
  password: '',
  email: '',
  mobile:''
}
export function SignUpForm() {
  const [user, setUser] = useState(initobj)
  function updateUser(e: any) {
    let newuser: any = { ...user }
    newuser[e.target.name] = e.target.value
    setUser(newuser)
    console.log(newuser)
  }

  const M_updateUser = useCallback((e)=>updateUser(e), [])


  async function handleSubmit(){
     handleSignUpJWT(user)
  }
 async function handleSignUpJWT(values:any) 
 {
  let result:any='',errorMessage='',errors =new Array();
  try
  {   
     result= await execGql('mutation',SignUpUsernameJWT,values)
     console.log('resultJWT');
     console.log(result);
     console.log('resultJWT--end');
  }
  catch(err)
   {  
    console.log('errJWT');
    console.log(err);
    console.log('errJWT--end');
      errors = err.errorsGql;
      errorMessage = err.errorMessageGql;    
      //return callback({"errors":errors,"errorMessage":errorMessage},'' );
   }
 if(!result)
 {

   //return callback({"errors":[],"errorMessage":'No errors and results from GQL'} ,'');
 }
 else
 {
    //return callback('',result.data.signUpUsernameJWT);
 }
 }
  return (
    <div className="form sign-up-form">
      <h2 className="title">Sign Up</h2>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-user" name="username"  value={user.username} placeholder="Username"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-phone" name="mobile"  value={user.mobile} placeholder="Mobile No"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-envelope" name="email"  value={user.email} placeholder="Email"/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-lock" name="password"  value={user.password} placeholder="Password"/>
      {/* <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={updateUser}
          value={user.username}
        />
      </div> */}
      {/* <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={updateUser}
          value={user.email}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input type="text" placeholder="Password" onChange={updateUser} value={user.email}/>
      </div> */}
      <input
        type="button"
        value="Register"
        className="btn solid"
        onClick={handleSubmit}
      />
      <M_SocialMediaLogin label="Sign up" />
    </div>
  )
}

export const M_SignUpForm = React.memo(SignUpForm)
