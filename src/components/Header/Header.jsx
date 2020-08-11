import React from "react";
import Logo from "../../img/logo.png";
import Avatar from "../../img/profile.jpg";

const Header = (props) => {
  return (
    <header className="header fixed bg-white d-lg-block d-none">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a className="menu__link" href="/home">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="/Profile">
                    Profile
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="/Messages">
                    Messages
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-2">
            <div className="brand">
              <a href="/home" className="brand__link">
                <img className="brand__img" src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-md-5">
              <form action="" className="search">
                  <input type="search" className="search__input"/>
              </form>
              <div className="login">
                  <img src={Avatar} alt="Avatar" className="login__avatar"/>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
