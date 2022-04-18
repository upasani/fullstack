import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { Home } from './Component/Home';
import { Login } from './Component/Login';

import { Register } from './Component/Register';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ isAuthenticated, children }) => {
  // console.log(children)

  return isAuthenticated ? children : <Navigate to='/login' />

}
function App() {
  // home and todo is the private route ie user is login then only it is access that ow not
  // This is the private route which check some condition and return some route


  const { isAuthenticated } = useSelector((state) => state.login);
  // console.log(store,"In the login part");
  // const isAuthenticate =false;
  //This isauthenticate comes from the redux store 
  return (
    <div>
      <div>
        <div id='link' style={{
          width:"50%",
          display:"flex",
          justifyContent:"space-evenly",
          gap: "10px",
          fontSize:"22px",
          textDecoration:"None"
        }}>
          <Link to='/' >Home</Link>
          <Link to='/login'>Login</Link>
        </div>
        <Routes>
          <Route path='/'
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PrivateRoute>
            }>
          </Route>
          <Route path={'/login'} element={<Login />} ></Route>
          

        </Routes>
      </div>

    </div>
  );
}

export default App;
