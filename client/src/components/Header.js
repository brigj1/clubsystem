import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
      <h1>
        <Link to="/">Club System</Link>
      </h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // <Link to="/login">Click Here to Login</Link>
        <Link to="/signup">Click Here to Sign Up for an Account</Link>
      )}
    </header>
  );
}

export default Header;