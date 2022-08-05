import React from 'react'

function UserCard({user}) {
    const { id, username, email } = user
    //console.log(user)
    return (
      <div>
      {id} - {username} - {email}<br/>
      </div>
     
    );
  }
  
  export default UserCard