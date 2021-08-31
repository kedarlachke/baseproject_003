import {USER_REGISTRATION_REQUEST,USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILED,USER_VERIFY_SUCCESS,
    AUTH_PENDING,
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR, 
    USER_SIGNOUT,
    ADD_USERS,
    LOADING_USERS,
    FAILED_USERS

} from './ActionTypes'
export const Initialstate = {
    loading:false,
    error:'',
    key:'',
    loginSuccess:false,
    users:[]
}

const reducer = (state = Initialstate, action:any) =>{
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
        case ADD_USERS:
            return {...state,loading:false,error:null,users:action.payload};
        case LOADING_USERS:
            return {...state,loading:true,error:null,users:[]};
        case FAILED_USERS:
            return {...state,loading:false,error:action.payload,users:[]};        
                
        default: return state;
    }
}

export default reducer;