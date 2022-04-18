
export const TEACHER_SUCCESS="TEACHER_SUCCESS";
export const TEAHCER_FAILURE="TEACHER_FAILURE";

export const success=(payload)=>{
    return{
        type:TEACHER_SUCCESS,
        payload
    }
}
export const failure=()=>{
    return{
        type:TEAHCER_FAILURE
    }
}
export const get_teacher=(payload)=>(dispatch)=>{

    fetch(`http://localhost:8080/get-teacher`)
    .then((res)=>res.json())
    .then((res)=>dispatch(success([...payload]))).catch((err)=>dispatch(failure()))
}