//import { useEffect } from "react";
import { useState } from "react";

const Login = ({ onLogin }) => {
  //const [recentProjects, setRecentProjects] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   // fetch the 3 most recently added projects from json-server
  //   fetch("http://localhost:4000/projects?_sort=id&_order=desc&_limit=3")
  //     .then((r) => r.json())
  //     .then((recentProjects) => {
  //       setRecentProjects(recentProjects);
  //     });
  // }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <section className="box">
      {/* <h2 style={{ fontSize: "3rem" }}>Join the Club!</h2> */}
      <h2>Join the Club!</h2>
      <p>
        With more than 12 local affiliates and growing, there's bound to be
        a club with activities and people you would like to join.
      </p>
      <form onSubmit={handleSubmit}>
      {/* <h3>Login With Username</h3> */}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
      {/* <h3>Recent Projects:</h3>
      {recentProjects.map((project) => (
        <p key={project.id}>{project.name}</p>
      ))}
      <div style={{ margin: "1rem 0" }}>
        <a className="button" href="/projects">
          View All Projects
        </a>
      </div> */}
    </section>
  );
};

export default Login;