import React from "react";
import ProfileImg from "../../img/profile-midle-1.jpg";

const SharePost = (props) => {
  let text = React.createRef();

  let newPost = () => {
    let currentText = text.current.value;
	props.addPost(currentText);
	props.updatePost('')
  };

  let onPostChange = () => {
    let currentText = text.current.value;
    props.updatePost(currentText);
  };

  return (
    <div className="share-post">
      <div className="share-post__profile">
        <a href="/profile" className="share-post__link">
          <img src={ProfileImg} alt="Profile" className="share-post__img" />
        </a>
      </div>
      <div className="share-content">
        <form className="share-content__box">
          <textarea
            onChange={onPostChange}
            value={props.newPostText}
            ref={text}
            className="share-content__field"
          />
          <button type="button" onClick={newPost} className="btn-share">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharePost;
