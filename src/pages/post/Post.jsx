import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase'; // Adjust the path as necessary
import DOMPurify from 'dompurify';
import './post.css'; // Create and adjust CSS as necessary
import Loading from "../../components/loading/Loading.jsx";

function Post({ isAuth }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = doc(db, 'posts', id);
      const postData = await getDoc(postDoc);
      if (postData.exists()) {
        setPost(postData.data());
      } else {
        console.log('No such document!');
      }
    };

    const fetchCurrentUser = () => {
      const user = auth.currentUser;
      if (user) {
        setCurrentUser({
          name: user.displayName,
          id: user.uid
        });
      } else {
        setCurrentUser(null);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await fetchPost();
      fetchCurrentUser();
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      navigate("/");
    } catch (err) {
      console.error("Error deleting post: ", err);
    }
  };

  if (loading) {
    return <Loading />;
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
            <p className='author'><em>Author: {post.author.name}</em></p>
          </div>
        </div>
        <div className="post-content">
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }} />
          <p className='cat'><strong>Category:</strong> {post.category}</p>
        </div>
        <p><em>{new Date(post.timestamp.toDate()).toLocaleString()}</em></p>
        {isAuth && currentUser && currentUser.id === post.author.id && (
          <button onClick={handleDelete} className="delete-button">Delete Post</button>
        )}
      </div>
    ) : (
      <p>Post not found</p>
    )
  );
}

export default Post;
