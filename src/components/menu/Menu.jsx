import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="menu-subtitle">{"What's hot"}</h2>
      <h1 className="menu-title">Most Popular</h1>
      {/* <MenuPosts withImage={false} /> */}
      <h2 className="menu-subtitle">Discover by topic</h2>
      <h1 className="menu-title">Categories</h1>
      {/* <MenuCategories /> */}
      <h2 className="menu-subtitle">Chosen by the editor</h2>
      <h1 className="menu-title">Editors Pick</h1>
      {/* <MenuPosts withImage={true} /> */}
    </div>
  );
};

export default Menu;