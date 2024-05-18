import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ post }) => {
  return (
    <div className="card-container">
      <div className="card-post">
        <div className="card-imageContainer">
          <img src={post.imageURL} alt={post.title} className="card-image" />
        </div>
        <div className="card-textContainer">
          <div className="card-detail">
            <span className="card-category">{post.category} </span>
            <span className="card-date">&bull;{new Date(post.timestamp.toDate()).toLocaleDateString()}</span>
            
          </div>
          <h1>{post.title}</h1>
          <p className="card-desc">{post.body}</p>
          <Link to={`/post/${post.id}`} className="card-link">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
