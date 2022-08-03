//import { useEffect } from "react";
//import { useState } from "react";
import { useForm } from "../hooks/useForm";

const Login = ({ onLogin }) => {
  const initialState = {
    username: '',
    password: '',
  };
    //password_confirmation: '',  // this is for signup...

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const { formData, handleChange, reset } = useForm(initialState);

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
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ username, password }),
      body: JSON.stringify({ ...formData }),
    };

    fetch("/api/login", configObj)
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            onLogin(user);
            reset();
          });
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
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          // onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;