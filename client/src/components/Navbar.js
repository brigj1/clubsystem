import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// setCurrentUser looks unused:
function Navbar({setCurrentUser, currentUser, handleLogout}) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const curr_user = `Logged in as ${currentUser.username}`
  //const curr_user_url = `/users/${currentUser.id}`

        //<NavLink to="/users" >.Your Account</NavLink>
  return (
    <nav >
      <div className="">
        <NavLink to="/clubs" >Clubs.</NavLink>
        <NavLink to={"/users/:id"} >.Your Account</NavLink>
        {/* <NavLink to={`/users/${currentUser.id}`} >.Your Account</NavLink> */}
      </div>
      <div>
          <button className="text-right" onClick={() => setNavbarOpen(!navbarOpen)}>
            {curr_user}
          </button>
          <hr/>
          <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
