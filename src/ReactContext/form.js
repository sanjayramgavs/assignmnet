import React,{createContext , useState} from 'react'
import UserInfo from './UserInfo';

export const sharedData = createContext();

function FormPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [agree,setAgree] = useState(false);
    
  return (
 <>
 <div>
 
    <sharedData.Provider value={{name,email}} >
    Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br />
    Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
    <input type="checkbox" value={agree} onChange={(e)=>setAgree(e.target.checked)} /> I Agree<br />
    {
        agree ? <h1>Form Submitted<UserInfo /></h1> : <h1>Form Not Submitted</h1>
    }
    </sharedData.Provider>
 </div>

 </>
  );
}

export default FormPage