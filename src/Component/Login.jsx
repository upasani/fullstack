import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/Login/action';
import './style.css';


import { Navigate } from 'react-router-dom';
export const Login = () => {
    const { isAuthenticated } = useSelector((state) => state.login);
    const store = useSelector((state) => state);
    // const Navigate=useNavigate();
    // console.log(store,"The store is");
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");

    const handlelogin = () => {
        const payload = {
            username,
            password
        }
        dispatch(login(payload));


    }
    //  console.log(store,"After the store is")
    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    // if(!isAuthenticated){
    //     return <Navigate to='/register'/>
    // }

    return (
        <>
            <div id='log-contain'>
                <h1>Admin login</h1>
                <input type="text" placeholder="Enter your username" value={username}
                    onChange={(e) => setUsername(e.target.value)} required /> <br /> <br />
                <input type="password" placeholder='Enter your password' value={password}
                    onChange={(e) => setPass(e.target.value)} required /> <br /><br />
                <button onClick={handlelogin}>login</button>

            </div>

        </>
    )
}