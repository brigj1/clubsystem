import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({setCurrentUser, currentUser, handleLogout}) {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const curr_user = `Logged in as ${currentUser.username}`

  return (
    <nav >
      <div className="">
        <NavLink to="/clubs" >Clubs</NavLink>
        <NavLink to="/users" >Members</NavLink>
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
