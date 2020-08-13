import React from "react";
import ProfileImg from "../../img/profile-midle-1.jpg";

const Post = (props) => {
  return (
    <div className="col-lg-6 order-1 order-lg-2">
    <div className="share-post">
        <div className="share-post__profile">
            <a href="/profile" className="share-post__link">
                <img src={ProfileImg} alt="Profile" className="share-post__img"/>
            </a>
        </div>
        <div className="share-content">
            <form className="share-content__box">
                <textarea className="share-content__field" placeholder="Sat Something"></textarea>
                <button className="btn-share">Share</button>
            </form>
        </div>
    </div>
      <div className="post">Posts</div>
    </div>
  );
};
export default Post;
