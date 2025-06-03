import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="nav-header">
      <nav className="navbar-box">
        <div className="nav-main-box">
          <span>CRUD_Operation</span>
        </div>
        <div className="nav-link-box">
          <ul>
            <li><Link to={"/"} className="li-Link">Home</Link></li>
            <li><Link to={"/add"} className="li-Link">Add Data</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
