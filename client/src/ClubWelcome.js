// client/src/ClubWelcome.js
//import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

//import Header from "./components/Header";
//import Signup from "./components/Signup";
import EditUserForm from "./components/EditUserForm";
import Navbar from "./components/Navbar";  // can send to a User or Club component

//function App()
function ClubWelcome({ currentUser, setCurrentUser, handleLogout }) {
  const history = useHistory();

  function xhandleLogout() {
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

  return (
    <div>
      <div className="App">
        {/* <Header user={user} onLogout={handleLogout} />   xme */}
        {/* <Header currentUser={currentUser} handleLogout={handleLogout}/> */}
        <Navbar
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
        <Switch>
          {/* <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Signup setCurrentUser={setCurrentUser} />
          </Route> */}
          <Route path='/users/:id'>
            <EditUserForm setCurrentUser={setCurrentUser} />
          </Route>
          <Redirect to="/api/clubs" />
        </Switch>
      </div>
    </div>
  );
}
          // <Route path='/users/new'></Route>

export default ClubWelcome;