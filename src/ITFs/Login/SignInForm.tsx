import React, { useState, useCallback} from 'react'
import { M_LeftIconRoundInput } from '../common/InputFields/RoundInput/RoundInput'
import {M_SocialMediaLogin} from './SocialMediaLogin'
import {connect} from 'react-redux'
import {ActionToDispatch,ActionToRedirect,handleSignInJWT, checkCurrentUsernameJWT} from '../Redux/reducers/actions'
const initobj = {
  applicationid : "15001500", client: "45004500" ,  lang: "EN",
  username: '',
  password: '',
}
export function SignInForm(props:any) {
  const [user, setUser] = useState(initobj)
  const [state, setState] = useState(({}))
  function updateUser(doc:any) {
    setUser(doc)
    //console.log(newuser)
  }
 
  
    const M_updateUser = useCallback((e)=>updateUser(e), [user])
    const handleClearErrors=()=>
    {
      setState({formErrorMessage: ''});
      setState({formErrors: []});
    }

    async function handleProcessSubmitSignIn(values:any) {
         var result='',errorMessage='',errors =new Array();
         props.ActionToDispatch({ type: 'AUTH_PENDING' ,payload : ['Signing In'] });
         setState({formErrorMessage: 'In process'});

       
         handleSignInJWT(values,async(err:any,result:any)=>{
      
            if(!err)
            {
         
              if(!result)
              {
                props.ActionToDispatch({ type: 'AUTH_ERROR' ,payload : errors });
                setState({formErrorMessage: errorMessage,formErrors : errors});  
              }
              else
              {

                console.log('result.signUpUsernameJWT.token');
          console.log(result.token);
          console.log('result.signUpUsernameJWT.token--end');
          sessionStorage.setItem('jwtToken', result.token);
          console.log('token added');
              
                checkCurrentUsernameJWT(async (err:any,result:any)=>
                {
                 if(!err)
                  {
                 
                            if(!result)
                            {
                              props.ActionToDispatch({ type: 'AUTH_ERROR' ,payload : errors });
                              setState({formErrorMessage: errorMessage,formErrors : errors}); 
                              
                            }
                            else
                            {
                            setState({formErrorMessage: 'Authenticated'});  
                            props.ActionToDispatch({ type: 'AUTH_USER' ,payload :  result  });
                            props.ActionToRedirect('/dashboard');
                            }

                  }
                }
                )
              }
           }
            else
            {
              props.ActionToDispatch({ type: 'AUTH_ERROR' ,payload : err.errors });
              setState({formErrorMessage: err.errorMessage,formErrors : err.errors}); 
            }
         })
        }
   
    const handleSubmit=(currentdocument:any)=>{
       handleClearErrors();
       let { username, password, applicationid ,client,lang}=currentdocument
       let values={
        username, password, applicationid ,client,lang 
       }
       try{ handleProcessSubmitSignIn(values);   }
       catch(err)  {   setState({formErrorMessage: err.errorMessage,formErrors : err.errors});} 
       
    } 


  return (
    <div className="form sign-in-form">
      <h2 className="title">Sign In</h2>
      <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-user" name="username" placeholder="Username" currdoc={user} section={"username"} label="user name" wd={"12"}/>
      <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-lock" name="password" placeholder="Password" currdoc={user} section={"password"} label="user name" wd={"12"}/>
      <input type="button" value="Login" className="btn solid" onClick={()=>{handleSubmit(user)}} />
      <div  className="field-error">{state.formErrorMessage}</div>
      <M_SocialMediaLogin label="Login" />
      
    </div>
  )
}

const mapStateToProps = (state:any) => { 
  return { authenticated:state.auth.authenticated,authprocess:state.auth.authprocess,authuser:state.auth.authuser };
 };
export const M_SignInForm = React.memo(connect(mapStateToProps,{ ActionToDispatch,ActionToRedirect})(SignInForm))
