import React from "react";
import "./card.css";
import profilePicture from "./intro.jpg";
import bannerImage from "./bg-pattern-card.svg";

export const Card = (props) => {
  const { name, surname, age, city, stats } = props.user;
  return (
    <div className="content">
      <div className="topBanner">
        <img className="bannerImage" src={bannerImage} alt="background" />
        <div className="profilePictureContainer">
          <img className="profilePicture" src={profilePicture} alt="profile" />
        </div>
      </div>

      <div className="profileInfo">
        <p className="--larger-bold-text ">
          {name} {surname} <span>{age}</span>
        </p>
        <p className="profileCity --small-text">{city}</p>
      </div>
      <div className="profileStatsContainer">
        <div className="profileStats">
          <p className="--larger-bold-text">{stats.followers}K</p>
          <p className="profileStatLabel --smaller-text">Followers</p>
        </div>
        <div className="profileStats">
          <p className="--larger-bold-text">{stats.likes}K</p>
          <p className="profileStatLabel --smaller-text">Likes</p>
        </div>
        <div className="profileStats">
          <p className="--larger-bold-text">{stats.photos}K</p>
          <p className="profileStatLabel --smaller-text">Photos</p>
        </div>
      </div>
    </div>
  );
};
