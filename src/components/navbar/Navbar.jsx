import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ loggedIn, handleLogout }) => {
  return (
    <nav className="topnav">
      <Link className="nav-brand" to="/">
        My Router App
      </Link>
      <div className="nav-items">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        {loggedIn && (
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        )}
        {!loggedIn && (
          <Link
            className="nav-link"
            to={{
              pathname: "/login",
              state: { from: window.location.pathname },
            }}
          >
            Login
          </Link>
        )}
        {loggedIn && (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
