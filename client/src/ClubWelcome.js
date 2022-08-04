// client/src/ClubWelcome.js
//import { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

//import Header from "./components/Header";
//import Signup from "./components/Signup";
//import Login from "./components/Login";
import EditUserForm from "./components/EditUserForm";
import Navbar from "./components/Navbar";
// consider sending to a User component or a Club component

// Create a custom hook useForm
// it needs to be a function
// must start with 'use'
// use other hooks inside of this custom hook such as useState, useEffect
// the function needs to return an object: this object is going to contain is key value pairs. the keys are arbitrary, the values are the methods that have been defined inside of this hook. Typically, lets keep the key names the same as the method names

//function App()
function ClubWelcome({ currentUser, setCurrentUser }) {
  const history = useHistory();
  // const [count, setCount] = useState(0); // xme
  // const [user, setUser] = useState(null); // xme
  // const [currentUser, setCurrentUser] = useState(null); // xme

  function handleLogout() {
    //setUser(null);
    fetch(`/api/logout`, {
      method: 'DELETE',
      // credentials: 'include'  // xme
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
          history.push('/')
        }
      })
  }

  // function handleLogin(user) {  // xme
  //   setUser(user);  // xme
  // }  // xme

  return (
    <div>
      <div className="App">
        {/* <Header user={user} onLogout={handleLogout} />   xme */}
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