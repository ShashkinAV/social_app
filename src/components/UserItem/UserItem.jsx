import React from "react";
import UserImg from "../../img/1.jpg";

const UserItem = (props) => {
	return (
		<li className="users__item">
            <a href="/" className="users__link">
              <img
                src={UserImg}
                className="users__avatar"
                alt="Profile Img"
              ></img>
              <span className="users__username">{props.name}</span>
            </a>
          </li>
	)
}
export default UserItem;