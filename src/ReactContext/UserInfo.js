import React,{useContext} from 'react'
import {sharedData} from './form';

function UserInfo() {
    const {name,email} = useContext(sharedData);
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
    </div>
  )
}

export default UserInfo