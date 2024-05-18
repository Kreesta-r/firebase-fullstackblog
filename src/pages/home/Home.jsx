import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the path as necessary
import Featured from '../../components/featured/Featured'
import CategoryList from '../../components/categoryList/CategoryList'
import CardList from '../../components/cardList/CardList'
import Menu from '../../components/menu/Menu'
function Home() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const postCollectionRef = collection(db, 'posts');
      const data = await getDocs(postCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchPosts();
  }, []);

  return (
    <div className='container'>
    <Featured posts={posts}/>
    <CategoryList posts={posts}/>
    <div className="content">
        <CardList posts={posts}/>
        <Menu posts={posts}/>
    </div>
    </div>
  )
}

export default Home