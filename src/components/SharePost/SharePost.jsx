import React from "react";
import ProfileImg from "../../img/profile-midle-1.jpg";

const SharePost = (props) => {
  //Ссылка на элемент DOM textarea
  let newPostElement = React.createRef();

  //Отправка поста в state
  let addPost = () => {
    let action = {
      type: "ADD-POST",
    };
    props.dispatch(action);
  };

  //Отслеживание изменения в textarea
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {
      type: "UPDATE-NEW-POST-TEXT",
      newText: text,
    };
    props.dispatch(action);
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
            value={props.newPostText}
            className="share-content__field"
            ref={newPostElement}
            onChange={onPostChange}
            placeholder="Write text please"
          />
          <button type="button" onClick={addPost} className="btn-share">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default SharePost;
