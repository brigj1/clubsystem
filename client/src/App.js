// client/src/components/App.js
import { React, useState, useEffect } from "react";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import GenericHome from "./GenericHome";
import ClubWelcome from "./ClubWelcome";
import Header from "./components/Header";
//import Signup from "./components/Signup";
//import Login from "./components/Login";
//import EditUserForm from "./components/EditUserForm";

function App() {
  //const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false)
  const history = useHistory();

  useEffect(() => {
    fetch('/api/me', {
      //credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  // function handleLogin(user) {
  //   setUser(user);
  // }

  // function handleLogout() {
  //   setUser(null);
  // }

  function handleLogout() {
    //setUser(null);
    fetch(`/api/logout`, {
      // credentials: 'include', // xme
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        setCurrentUser(null)
        history.push('/')
      }
    })
  }

  if(!authChecked) { return <div></div>}
  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout}/>
      {currentUser ? (
          <ClubWelcome
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            handleLogout={handleLogout}
          />
        ) : (
          <GenericHome
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </div>
  )

}

export default App;
