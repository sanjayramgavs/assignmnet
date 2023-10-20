import React from 'react'

function ProfilePage({user , onLogout}) {
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Hello,{user.username}</p>
        <button onClick={onLogout}>Logout</button>

    </div>
  )
}

export default ProfilePage