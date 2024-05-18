import React from "react";
import  "./featured.css";


const Featured = () => {
  return (
    <div className="featured-container">
      <h1 className="title">
        <b>Hey, <em>kreestatek</em> here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="post">
        <div className="imgContainer">
          <img src="/p1.jpeg" alt="" fill className="image" />
        </div>
        <div className="textContainer">
          <h1 className="postTitle">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="featured-cta">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;