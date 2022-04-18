import { TEACHER_SUCCESS,TEAHCER_FAILURE } from "./action"
const initState={
    Error:false,
    Success:false,
    teacher:[]
}
export const Teachreducer=(store=initState, {type,payload})=>{
    switch(type){
        case TEACHER_SUCCESS:
            return{
                ...store,
                Error:false,
                teacher:[...payload],
                Success:false
            }
        case TEAHCER_FAILURE:
            return{
                ...store,
                Error:true,
                teacher:[],
                Success:false
               
            }
        default:
            return store
    }

}
