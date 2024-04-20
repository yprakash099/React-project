import {useState}  from 'react';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();


    function loginClick()
    {
           if(uname == "admin" && password == "admin123") 
           {
                // setResult("Welcome to Admin");
                sessionStorage.setItem("USER_ID", uname);
                navigate("/");
           }
           else
           {
                setResult("Invalid User Id or password");
           }
    }

    return (
    <>

       <div style={{textAlign : "center"}}>
       <fieldset>
        <form >
            <legend> User Login </legend>

            <label>User Name : </label> &nbsp;
            <input  type="text"  onChange={ (e) => setUname(e.target.value) } />
            
            <br/><br/>
            <label>Password : </label>&nbsp;&nbsp;&nbsp;
            <input  type="password"  onChange={ (e) => setPassword(e.target.value) } />
        <br/><br/>
        <input  className = "btn btn-primary" type="button"  onClick={loginClick}  value="Login" />
        </form>
       <p style={{color:"red"}}>{result}</p>
       </fieldset>
       </div>
        
    
    
    </>);

}


export default Login;