import React from "react";
import ProfileImg from "../../img/profile-midle-1.jpg";
import PostProfileImg from "../../img/profile.jpg";
import PostGallery from "../../img/post-1.jpg";

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
      <div className="post">
		  	<div className="post__title d-flex align-items-center">
				<div className="post__thumb">
					<a href="/profile">
						<figure className="post__img">
							<img src={PostProfileImg} alt="Profile"/>
						</figure>
					</a>
				</div>
				<div className="post__author">
					<h2  className="author">John Watson</h2>
					<span className="post__time">20 min ago</span>
				</div>
				<div className="post__edit"></div>
			</div>
			<div className="post__content">
				<p className="post__desc">
				Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
				</p>
				<div className="post__gallary">
					<img src={PostGallery} alt="gallery"/>
				</div>
				<div className="post__meta">
					<button className="post__like">Like this post</button>
				</div>
			</div>
	  </div>
    </div>
  );
};
export default Post;
