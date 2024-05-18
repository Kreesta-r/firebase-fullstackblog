import React, { useState } from 'react';
import './cardList.css';
import Pagination from '../pagination/Pagination.jsx';
import Card from '../card/Card';

const CardList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Adjust as needed
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <div className="list-container">
      <h1 className="list-title">Recent posts</h1>
      <div className="list-posts">
        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(posts.length / postsPerPage)}
        onChange={setCurrentPage} // Assume the Pagination component has an onChange prop
      />
    </div>
  );
};

export default CardList;
