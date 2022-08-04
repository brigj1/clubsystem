// client/src/components/GenericHome.js
//import { React, useState, useEffect } from "react";
import { React } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
//import EditUserForm from "./components/EditUserForm";

// Create a custom hook useForm
// it needs to be a function
// must start with 'use'
// use other hooks inside of this custom hook such as useState, useEffect
// the function needs to return an object: this object is going to contain is key value pairs. the keys are arbitrary, the values are the methods that have been defined inside of this hook. Typically, lets keep the key names the same as the method names

function GenericHome({ setCurrentUser }) {
  //const [count, setCount] = useState(0);
  //const [user, setUser] = useState(null);
  //const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          {/* <Route exact path="/login"> */}
          <Route exact path="/">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route path='/signup'>
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          <Redirect to="/" />
        </Switch>
  );
}
          // <Route path='/users/new'></Route>

export default GenericHome;

          // <Route path='/users/:id'>
          //   <EditUserForm setCurrentUser={setCurrentUser} />
          // </Route>