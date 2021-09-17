import React, { useState,useCallback } from 'react'
import { M_LeftIconRoundInput } from '../common/InputFields/RoundInput/RoundInput'
import {M_SocialMediaLogin} from './SocialMediaLogin'
import {ActionToDispatch,ActionToRedirect,handleSignUpJWT,checkCurrentUsernameJWT} from '../Redux/reducers/actions'
import {checkTouched,nvl} from '../common/CommonLogic';
import {displaySubmitError,displayFieldError,runCheck,minLength10,
  maxLength10,emailCheck,numberCheck,requiredCheck,maxLength128,minLength2} from '../common/validationlib';
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
  const [state, setState] = useState(({}))
   const updateUser=(doc: any)=> {
    
   
    setUser(doc)
  
  }
console.log('props---->',props)
  const M_updateUser = useCallback((e)=>updateUser(e), [user])


 
  const handleClearErrors=()=>
  {
    setState({formErrorMessage: '',formErrors: []});
  }


   const handleProcessSubmit = async(values:any) => {
   var result='',errorMessage='',errors =new Array();
   props.ActionToDispatch({ type: 'AUTH_PENDING' ,payload : ['Signing In'] });
   setState({formErrorMessage: 'In process'});
   
   handleSignUpJWT(values,async (err:any,result:any)=>
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
       })
    }
   }
   else
   {
     props.ActionToDispatch({ type: 'AUTH_ERROR' ,payload : err.errors });
     setState({formErrorMessage: err.errorMessage,formErrors : err.errors});  
    }
    }

 )
}
  


const handleSubmit=(currentdocument:any) => {
 console.log("this is current doc----------->"+currentdocument)
 handleClearErrors();
 let { firstname, lastname,email,username, password, applicationid ,client,lang}=currentdocument
 let values={
   firstname, lastname,email,username, password, applicationid ,client,lang 
 }
  try{ handleProcessSubmit(values);   }
  catch(err)  { setState({formErrorMessage: err.errorMessage,formErrors : err.errors});} 
  //event.preventDefault();
} 

  return (
    <div className="form sign-up-form">
      <h2 className="title">Sign Up:{props.key1}</h2>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-user" name="username" placeholder="Username" currdoc={user} section={"username"} label="user name" wd={"12"}/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-phone" name="mobile"  placeholder="Mobile No" currdoc={user} section={"mobile"} label="mobile" wd={"12"}/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-envelope" name="email" placeholder="Email" currdoc={user} section={"email"} label="mobile" wd={"12"}/>
     <M_LeftIconRoundInput  modifydoc={M_updateUser} iconClass="fas fa-lock" name="password" placeholder="Password" currdoc={user} section={"password"} label="mobile" wd={"12"}/> 
      <input type="button" value="Register" className="btn solid" onClick={()=>{handleSubmit(user)}}/>
      <M_SocialMediaLogin label="Sign up" />
    </div>
  )
}

const mapStateToProps = (state:any) => { 
  return { authenticated:state.auth.authenticated,authprocess:state.auth.authprocess, authuser:state.auth.authuser };
 };
export const M_SignUpForm = React.memo(connect(mapStateToProps,{ActionToDispatch,ActionToRedirect})(SignUpForm))


export const handleSaveCheck=(currentdocument:any)=>
{
  const {touched,username,firstname,password,repassword,validatemode} = currentdocument ; 
   let isNew=false;
   let username_check=runCheck(nvl(username,''), [requiredCheck]);
   let firstname_check=runCheck(nvl(firstname,''), [requiredCheck]);
   let password_check=runCheck(nvl(password,''), [requiredCheck]);
   let repeatpassword_check=runCheck(nvl(repassword,''), [requiredCheck]);
   if(password_check=='' && repeatpassword_check=='')
    {
        if(password!=repassword)
        password_check='Password & Repeat Password should be same'
    }
   let docid;
   if(currentdocument._id==null || currentdocument._id=='')
   {
    docid='NO-ID'
   }
   else
   {
    docid=currentdocument._id
   }

   if(validatemode=='save'  )
   {
        currentdocument.errorsAll={
        firstname:firstname_check,
        password:password_check,
        username:username_check,
        repeatpassword:repeatpassword_check
      }
   }

  if(validatemode=='touch' && touched!=null)
   {
        currentdocument.errorsAll={
        firstname:checkTouched(nvl(touched.firstname,false),firstname_check),
        username:checkTouched(nvl(touched.username,false),username_check),
        password:checkTouched(nvl(touched.password,false),password_check) ,
        repeatpassword:checkTouched(nvl(touched.repeatpassword,false),repeatpassword_check) 
      }
   }
  return currentdocument;
}