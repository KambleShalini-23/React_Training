import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Alert} from "antd"
import axios from "axios"
import Cakelist from "./Cakelist";

function Login()
{
    var navigate = useNavigate();
    var [error,setError] = useState(null);
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    function signIn(email,password)
    {
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+"/login",
            method:"post",
            data:{email:email,password:password}
        }).then((response)=> {
            console.log("Response",response)
            localStorage.token=response.data.token
            navigate('/')
        },(error)=>{
            console.log("Error",error)
        })
    }
    
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Login</h1>
            {error && <Alert type="danger" message={error} />}
            <input placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '1rem', width: '250px', fontSize: '16px', padding: '8px' }} />
            <input placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '1rem', width: '250px', fontSize: '16px', padding: '8px' }} />
            <Link to='/signUp' style={{ marginBottom: '1rem' }}>Sign Up for New User</Link>
            <Link to='/forgetPassword' style={{ marginBottom: '1rem' }}>Forget Password?</Link>
            <button onClick={() => signIn(email, password)} style={{ marginBottom: '1rem' }}>Login</button>
        </div>  
        </>
    )
}
export default Login;