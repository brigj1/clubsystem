import './App.css';

import { useState, useEffect } from "react";

// Remove all of the references to count on both the homepage and on the /testing route.  
// We need to add either the login/signup links on homepage or create a nav bar to direct users to it

function App() {


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => console.log("hello"))
  }, []);

  return (
    <div className="App">
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
