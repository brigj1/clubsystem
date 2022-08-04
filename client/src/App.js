// client/src/components/App.js
import { React, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
//import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";  // This likely needs a home somewhere
import GenericHome from "./GenericHome";
import ClubWelcome from "./ClubWelcome";
//import Signup from "./components/Signup";
//import Login from "./components/Login";
//import EditUserForm from "./components/EditUserForm";

// Create a custom hook useForm
// it needs to be a function
// must start with 'use'
// use other hooks inside of this custom hook such as useState, useEffect
// the function needs to return an object: this object is going to contain is key value pairs. the keys are arbitrary, the values are the methods that have been defined inside of this hook. Typically, lets keep the key names the same as the method names

function App() {
  //const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false)

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

  if(!authChecked) { return <div></div>}
  return (
    <BrowserRouter>
      {currentUser ? (
          <ClubWelcome
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <GenericHome
            setCurrentUser={setCurrentUser}
          />
        )
      }
    </BrowserRouter>
  )

  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <Header user={user} onLogout={handleLogout} />
  //       <Switch>
  //         <Route path="/testing">
  //           <h1>Test Route</h1>
  //         </Route>
  //         <Route exact path="/login">
  //           <h1>Page Count: {count}</h1>
  //           <Login onLogin={handleLogin} />
  //         </Route>
  //         <Route path='/signup'>
  //           <Signup setCurrentUser={setCurrentUser} />
  //         </Route>
  //         <Route path='/users/:id'>
  //           <EditUserForm setCurrentUser={setCurrentUser} />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // );
}
          // <Route path='/users/new'></Route>

export default App;
