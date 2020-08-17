import React from "react";
import NikoImg from "../../img/1.jpg";
import FedorImg from "../../img/2.jpg";
import OliviaImg from "../../img/3.jpg";
import JohnImg from "../../img/4.jpg";

const RightBar = (props) => {
  return (
      <aside className="rightBar">
        <div className="rightBar__title">
          <h3>Users</h3>
        </div>
        <ul className="users">
          <li className="users__item">
            <a href="/" className="users__link users__link_active">
              <img
                src={NikoImg}
                className="users__avatar"
                alt="Profile Img"
              ></img>
              <span className="users__username">Niko</span>
            </a>
          </li>
          <li className="users__item">
            <a href="/" className="users__link">
              <img
                src={FedorImg}
                className="users__avatar"
                alt="Profile Img"
              ></img>
              <span className="users__username">Fedor</span>
            </a>
          </li>
          <li className="users__item">
            <a href="/" className="users__link">
              <img
                src={OliviaImg}
                className="users__avatar"
                alt="Profile Img"
              ></img>
              <span className="users__username">Olivia</span>
            </a>
          </li>
          <li className="users__item">
            <a href="/" className="users__link">
              <img
                src={JohnImg}
                className="users__avatar"
                alt="Profile Img"
              ></img>
              <span className="users__username">John</span>
            </a>
          </li>
        </ul>
      </aside>
  );
};
export default RightBar;
