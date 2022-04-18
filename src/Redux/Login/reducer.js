import { LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAILURE } from "./action";
const initState={
    loading:false,
    error:false,
    isAuthenticated:false,
    username:"",
    token:""
}

export const Loginreducer=(store=initState, {type,payload})=>{
    switch(type){
        case LOGIN_LOADING:
            return{
                ...store,
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...store,
                loading:false,
                error:false,
                isAuthenticated:true,
                username:payload.username,
                token:payload.token
            }
        case LOGIN_FAILURE:
            return{
                ...store,
                isAuthenticated:false,
                error:true,
                loading:false,
                username:"",
                token:""
            }
        default:
            return store
    }

}
