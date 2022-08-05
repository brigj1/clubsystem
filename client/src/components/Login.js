import { useForm } from "../hooks/useForm";

// const Login = ({ onLogin }) =>
const Login = ({ setCurrentUser }) => {
  const initialState = {
    username: '',
    password: '',
  };

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
      body: JSON.stringify({ ...formData }),
    };

    fetch("/api/login", configObj)
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setCurrentUser(user);
            reset();
          });
      }
    });
  }

  return (
    <section className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;