import React from 'react';
import { Link } from "react-router-dom"
import './menuPosts.css'; // Import your stylesheet (if needed)

const MenuPosts = ({ withImage = true }) => { // Set default for withImage

  return (
    <div className="menupost-items">
      <Link to="/" className="menupost-item">
        {withImage && (
          <div className="menupost-imageContainer">
            <img src="/p1.jpeg" alt="" fill className="menupost-image" />
          </div>
        )}
        <div className="menupost-textContainer">
          <span className={`menupost-category menupost-travel`}>Travel</span>
          <h3 className="menupost-postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="menupost-detail">
            <span className="menupost-username">John Doe</span>
            <span className="menupost-date"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      {/* Repeat Link components for other posts */}
      <Link to="/" className="menupost-item">
        {withImage && (
          <div className="menupost-imageContainer">
            <img src="/p2.jpeg" alt="" fill className="menupost-image" />
          </div>
        )}
        <div className="menupost-textContainer">
          <span className={`menupost-category menupost-culture`}>Culture</span>
          <h3 className="menupost-postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="menupost-detail">
            <span className="menupost-username">John Doe</span>
            <span className="menupost-date"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      {/* ... Add more Link components as needed */}
    </div>
  );
};

export default MenuPosts;
