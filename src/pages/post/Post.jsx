import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the path as necessary
import './post.css'; // Create and adjust CSS as necessary
import Loading from "../../components/loading/Loading.jsx"

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = doc(db, 'posts', id);
      const postData = await getDoc(postDoc);
      if (postData.exists()) {
        setPost(postData.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Loading/>;
  }

  return (
    post ? (
      <div className="post-container">
      <div className="postTop">
      <div className="post-imgContainer">
          <img src={post.imageURL} alt={post.title} className="post-image" />
        </div>
        <div className="postText">
          <h1>{post.title}</h1>
          <p><em>Author: {post.author.name}</em></p>
        </div>
      </div>
        <div className="post-content">
            <p>{post.body}</p>
            <p className='cat'><strong>Category:</strong> {post.category}</p>
        </div>

        
  
        <p><em>{new Date(post.timestamp.toDate()).toLocaleString()}</em></p>
      </div>
    ) : (
      <p>Post not found</p>
    )
  );
}

export default Post;
