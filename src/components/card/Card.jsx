import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import './card.css';

const Card = ({ post }) => {
  const sanitizedContent = DOMPurify.sanitize(post.body, { USE_PROFILES: { html: true } });

  return (
    <div className="card-container">
      <div className="card-post">
        <div className="card-imageContainer">
          <img src={post.imageURL} alt={post.title} className="card-image" />
        </div>
        <div className="card-textContainer">
          <div className="card-detail">
            <span className="card-category">{post.category}</span>
            <span className="card-date"> &bull; {new Date(post.timestamp.toDate()).toLocaleDateString()}</span>
          </div>
          <h1 className="card-title">{post.title}</h1>
          <div
            className="card-desc"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          <Link to={`/post/${post.id}`} className="card-link">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
