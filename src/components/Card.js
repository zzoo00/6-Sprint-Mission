import React from "react";
import ipad from "../assets/ipad.jpg";
import HeartIcon from "../assets/icon/HeartIcon.jpg";
import "./Card.css";

const Card = ({ title, price, likeCount }) => {
  return (
    <div className="container">
      <img className="productImg" src={ipad} alt="ipad" />
      <h2 className="title">{title}</h2>
      <span className="price">{price}</span>
      <div className="like">
        <img src={HeartIcon} alt="hearticon" />
        <span>{likeCount}</span>
      </div>
    </div>
  );
};

export default Card;
