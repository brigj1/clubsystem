// client/src/components/GenericHome.js
//import { React, useState, useEffect } from "react";
import { React } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

//import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
//import EditUserForm from "./components/EditUserForm";

function GenericHome({ setCurrentUser }) {
  console.log("generic_home: ", setCurrentUser);

  return (
    <div>
        <h2>Join the Club!</h2>
        <p>
          With more than 12 local affiliates and growing, there's bound to be
          a club with activities and people you would like to join.
        </p>
        <Switch>
          {/* <Route exact path="/login"> */}
          <Route exact path="/login" comment="/ ?">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Redirect to="/" />
        </Switch>
        <footer>
            <Signup setCurrentUser={setCurrentUser} />
        </footer>
    </div>
  );
}
          //<Route exact path='/signup' comment="maybe should be /api/signup">
            //<Signup setCurrentUser={setCurrentUser} />
          //</Route>

          //<Link to={"/signup"}>
          //</Link>
          // <Route path='/users/new'></Route>

export default GenericHome;

          // <Route path='/users/:id'>
          //   <EditUserForm setCurrentUser={setCurrentUser} />
          // </Route>