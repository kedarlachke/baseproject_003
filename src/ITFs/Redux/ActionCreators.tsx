import {USER_REGISTRATION_REQUEST,
        USER_REGISTRATION_FAILED,
        USER_REGISTRATION_SUCCESS,
        USER_VERIFY_SUCCESS,USER_SIGNOUT
    } from './ActionTypes'
import {execGql,execGql_xx} from '../gqlclientconfig';
import SignUpUsernameJWT from '../mutations/signUpUsernameJWT';
import SignInUsernameJWT from '../mutations/signInUsernameJWT';
import CurrentUserJWT from '../queries/CurrentUserJWT';

export const userResgistrationRequest=()=>{
 return {
     type:USER_REGISTRATION_REQUEST
 }
}

export const userResgistrationFailed=(error:string)=>{
    return {
        type:USER_REGISTRATION_FAILED,
        payload:error
    }
   }

export const userResgistrationSuccess=(key:string)=>{
    return {
        type:USER_REGISTRATION_SUCCESS,
        payload:key
    }
   }
   
   export const userVerifySuccess=(success:boolean)=>{
       return {
           type:USER_VERIFY_SUCCESS,
           payload:success
       }
      }
    
    export const userSignOut=(success:boolean)=>{
        return {
            type:USER_SIGNOUT,
            payload:success
        }
       }      

export const userRegistration=(values:any)=>{
    return (dispatch:any)=>{
        dispatch(userResgistrationRequest)
        execGql('mutation',SignUpUsernameJWT,values).then((result:any)=>{
            sessionStorage.setItem('jwtToken', result.data.signUpUsernameJWT.token);
            execGql('query',CurrentUserJWT,{}).then((result1:any)=>{
                dispatch(userResgistrationSuccess(result.data.signUpUsernameJWT.token))
                dispatch(userVerifySuccess(true))
             }).catch((error)=>{
                const errorMessage=error.message;
                dispatch(userResgistrationFailed(errorMessage))
             })
        }).catch((error)=>{
            const errorMessage=error.message;
            dispatch(userResgistrationFailed(errorMessage))
        })
    }
}

export const userSignIn=(values:any)=>{
    return (dispatch:any)=>{
        dispatch(userResgistrationRequest)
        execGql('mutation',SignInUsernameJWT,values).then((result:any)=>{
            sessionStorage.setItem('jwtToken', result.data.signInUsernameJWT.token);
            execGql('query',CurrentUserJWT,{}).then((result1:any)=>{
                dispatch(userResgistrationSuccess(result.data.signInUsernameJWT.token))
                dispatch(userVerifySuccess(true))
             }).catch((error)=>{
                const errorMessage=error.message;
                dispatch(userResgistrationFailed(errorMessage))
             })
        }).catch((error)=>{
            const errorMessage=error.message;
            dispatch(userResgistrationFailed(errorMessage))
        })
    }
}

export const userLoggedIn=()=>{
    return (dispatch:any)=>{
        execGql('query',CurrentUserJWT,{}).then((result1:any)=>{
            dispatch(userResgistrationSuccess(sessionStorage.getItem('jwtToken')+''))
            if(result1.errors.length === 0){
            dispatch(userVerifySuccess(true))
            }else{
                dispatch(userVerifySuccess(false))
            }
         }).catch((error)=>{
            
         })
    }
}

export async function  handleSignoutUsernameJWT() {
return (dispatch:any)=>{
    console.log('sessionStorage remove');
     // sessionStorage.removeItem('jwtToken');
      console.log('sessionStorage remove ends');
    
    
      var result='',errorMessage='',errors=[];
      dispatch(userSignOut(false))
        sessionStorage.removeItem('jwtToken');
}    
    
    } 