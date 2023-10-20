import React,{useState} from 'react'

const SignUpPage =({onSignUp}) => {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const handleSignUp = async() =>{
        try{
            const user =0;
            onSignUp(user);
        }
        catch{
            alert('SignUp Failed');
        }
    }
    return (
        <div>
            <h2>Signup</h2>
            <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
    );
}

export default SignUpPage