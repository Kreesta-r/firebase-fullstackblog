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
      <div className="logo">
        <Link to="/">Kreestatek</Link>
      </div>
      <div className="links">
        {/* <ThemeToggle /> */}
        <Link to="/" className="naviglink">Home</Link>
        <Link to="/contact" className="naviglink">Contact</Link>
        <Link to="/about" className="naviglink">About</Link>
        <Link to="/create" className="naviglink">Create</Link>
        {!isAuth ? <Link to="/login" className="naviglink">Login</Link>:<button onClick={signUserOut} className="signOut">SignOut</button>}
        {/* <AuthLinks /> */}
        <Link to="/search">
          <FaSearch className="search-icon"/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;