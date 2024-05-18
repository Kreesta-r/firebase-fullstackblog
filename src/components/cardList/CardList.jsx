import React from 'react'
import './cardList.css'
import Pagination from '../pagination/Pagination.jsx'
import Card from '../card/Card'


const CardList = ({posts}) => {
  return (
    <div className="list-container">
      <h1 className="list-title">Recent posts</h1>
      <div className="list-posts">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList 