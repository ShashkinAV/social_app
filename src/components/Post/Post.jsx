import React from "react";
import PostProfileImg from "../../img/profile.jpg";
//import PostGallery from "../../img/post-1.jpg";

const Post = (props) => {
  return (
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
					{props.msg}
				</p>
				{/* <div className="post__gallary">
					<img src={PostGallery} alt="gallery"/>
				</div> */}
				<div className="post__meta">
					<button className="post__like">Like this post</button>
				</div>
			</div>
	  </div>
  );
};
export default Post;
