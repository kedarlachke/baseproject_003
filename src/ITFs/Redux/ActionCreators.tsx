import {USER_REGISTRATION_REQUEST,
        USER_REGISTRATION_FAILED,
        USER_REGISTRATION_SUCCESS,
        USER_VERIFY_SUCCESS,USER_SIGNOUT,
        ADD_USERS
    } from './ActionTypes'
import {execGql,execGql_xx} from '../gqlclientconfig';
import SignUpUsernameJWT from '../mutations/signUpUsernameJWT';
import SignInUsernameJWT from '../mutations/signInUsernameJWT';
import usersQuery from '../queries/usersQuery'
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

    export const addusers = (users:any) =>{
        console.log('----------------------')
        console.log(users)
        console.log('----------------------')
        return(
        
        
        
        
        {
        type:ADD_USERS,
        payload:users
    })};    
    export async function getUsers(values:any) 
    {
      var result:any='',errorMessage='',errors =new Array();
     try
     {   
       result= await execGql('query',usersQuery,values)
     }
     catch(err)
      {  
         errors = err.errorsGql;
         errorMessage = err.errorMessageGql;    
         console.log({"errors":errors,"errorMessage":errorMessage})
        // return callback({"errors":errors,"errorMessage":errorMessage},'' );
      }
    if(!result)
    {
    
    console.log({"errors":[],"errorMessage":'No errors and results from GQL'})
    return [];
    
     // return callback({"errors":[],"errorMessage":'No errors and results from GQL'} ,'');
    }
    else
    {
       //return result.data;
       return result.data.users;
    }
    }    