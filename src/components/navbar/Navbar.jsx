import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import AuthLinks from "../authLinks/AuthLinks";
// import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = ({isAuth, signUserOut}) => {
  return (
    <div className="nav-container">
      <div className="social">
        <img src="/facebook.png" alt="facebook" width={24} height={24} />
        <img src="/instagram.png" alt="instagram" width={24} height={24} />
        <img src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <img src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="logo">Kreestatek</div>
      <div className="links">
        {/* <ThemeToggle /> */}
        <Link to="/" className="link">Home</Link>
        <Link to="/contact" className="link">Contact</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/create">Create</Link>
        {!isAuth ? <Link to="/login">Login</Link>:<button onClick={signUserOut} className="signOut">SignOut</button>}
        {/* <AuthLinks /> */}
        <Link to="/search">
          <FaSearch className="search-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;