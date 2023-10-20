import React,{useState} from 'react'

const LoginPage = () => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');

    const handleLogin = async() =>{
        try{
            const user =0;
            onLogin(user);
        }
        catch{
            alert('Login Failed');
        }
    }

  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage;