import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Feedback Admin</div>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/add-feedback"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Add Feedback
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
