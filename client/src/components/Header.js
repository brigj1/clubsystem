import { Link } from "react-router-dom";

//function Header({ user, onLogout })
function Header({ currentUser, handleLogout }) {
  // function handleLogout() {
  //   fetch("/api/logout", {
  //     method: "DELETE",
  //   }).then(() => onLogout());
  // }

  return (
    <header>
      <h1>
        <Link to="/">Club System</Link>
      </h1>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </header>
  );
}

// We need to hide the Login info for the GenericHome page - it has a Login form already!

export default Header;