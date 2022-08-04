// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";

// Create a custom hook useForm
// it needs to be a function
// must start with 'use'
// use other hooks inside of this custom hook such as useState, useEffect
// the function needs to return an object: this object is going to contain is key value pairs. the keys are arbitrary, the values are the methods that have been defined inside of this hook. Typically, lets keep the key names the same as the method names

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} onLogout={handleLogout} />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/login">
            <h1>Page Count: {count}</h1>
            <Login onLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
