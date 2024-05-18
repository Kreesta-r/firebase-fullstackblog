import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'


const CategoryList = () => {
  return (
    <div className="cat-container">
     <h1 className="cat-title">Popular Categories</h1>
     <div className="categories" >
    
          <Link to="/blog?cat=style" className="category style" >
            <img src="/style.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
              Style
          </Link>

          <Link href="/blog" className="category culture" >
            <img src="/culture.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
              Culture
          </Link>
          <Link href="/blog" className="category music" >
            <img src="/music.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
              Music
          </Link>
          <Link href="/blog" className="category sports" >
            <img src="/sports.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
              Sports
          </Link>
          <Link href="/blog" className="category fashion" >
            <img src="/fashion.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
              Fashion
          </Link>
          <Link href="/blog" className="category entertainment" >
            <img src="/entertainment.png" alt=""
             width={32}
              height={32}
              className="cat-image"/>
             Enterta-
          </Link>
     </div>
    </div>
  )
}

export default CategoryList