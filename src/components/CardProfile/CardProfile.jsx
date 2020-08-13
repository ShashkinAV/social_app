import React from "react";
import CardBanner from "../../img/banner-small.jpg";
import Avatar from "../../img/profile-midle-1.jpg";

const CardProfile = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__banner" src={CardBanner} alt="Profile" />
        <a href="/profile" className="card__link">
          <img src={Avatar} alt="Profile Avatar" />
        </a>
      </div>
      <div className="card__body">
        <h6 className="card__name">John Watson</h6>
        <p className="card__caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
export default CardProfile;
