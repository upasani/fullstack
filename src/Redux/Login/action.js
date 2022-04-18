//we have the action types 
import { useDispatch, useSelector } from 'react-redux';
import { Navigate,useNavigate } from 'react-router-dom';
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


//action creator this are the function which return the action object

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING

    }
}
export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const loginFailure = () => {
    return {
        type: loginFailure
    }
}
export const login = ({username,password}) => (dispatch) => {

    // const store = useSelector((state) => state);
    // console.log("In the store of the action",store);
    // https://masai-api-mocker.herokuapp.com/auth/login
    fetch(`http://localhost:8080/login`, {
        method: "POST",
        body: JSON.stringify({username,password}),
        headers: {
            "Content-Type": "application/json"

        }
    }).then((res) => res.json())
        .then((res) => {
            alert("In the success part")
            dispatch(loginSuccess({ username, token: res.token }));
            console.log(res);
        })

        .catch((err) => {
            dispatch(loginFailure());
            alert("In the failure part");
        });
        // console.log("the store is ",store);

}
