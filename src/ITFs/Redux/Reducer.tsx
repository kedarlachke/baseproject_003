import {USER_REGISTRATION_REQUEST,USER_REGISTRATION_SUCCESS,USER_REGISTRATION_FAILED,USER_VERIFY_SUCCESS,AUTH_PENDING,AUTH_USER,UNAUTH_USER,AUTH_ERROR, USER_SIGNOUT} from './ActionTypes'
export const documents = {
    loading:false,
    error:'',
    key:'',
    loginSuccess:false
}

const reducer = (state = documents, action:any) =>{
    switch (action.type) {
        case USER_REGISTRATION_REQUEST:
            return {...state,loading:true,}
        case USER_REGISTRATION_FAILED:
            return {...state, loading:false, error:action.payload }
        case USER_REGISTRATION_SUCCESS:
            return {...state, loading:false, error:'' }
        case USER_VERIFY_SUCCESS :
            return {...state, loading:false, error:'', loginSuccess:action.payload}
            case USER_SIGNOUT :
                return {...state, loading:false, error:'', loginSuccess:action.payload}                                       
        default: return state;
    }
}

export default reducer;