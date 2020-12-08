import React from "react";
import Logo from "../../img/logo.png";
import Avatar from "../../img/profile.jpg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header fixed d-lg-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 d-flex">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink exact className="menu__link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink className="menu__link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink className="menu__link" to="/messages">
                    Messages
                  </NavLink>
                </li>
								<li className="menu__item">
                  <NavLink className="menu__link" to="/users">
                    Users
                  </NavLink>
                </li>
							
              </ul>
            </nav>
          </div>
          <div className="col-md-2 d-flex justify-content-center">
            <div className="brand">
              <NavLink to="/home" className="brand__link">
                <img className="brand__img" src={Logo} alt="Logo" />
              </NavLink>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-end align-items-center">
            <form className="search">
              <input
                type="search"
                className="search__input"
                placeholder="Search"
              />
              <button className="search__btn">
                <i className="icon-search"></i>
              </button>
            </form>
            <div className="login">
              <NavLink to="/profile">
                <img src={Avatar} alt="Avatar" className="login__avatar" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
