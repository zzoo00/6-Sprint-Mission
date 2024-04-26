import React from "react";
import "./GNB.css";
import pandalogo from "./../assets/pandalogo.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const GNB = () => {
  return (
    <div className="GNB">
      <Link to="/">
        {" "}
        <img src={pandalogo} alt="pandalogo" />
      </Link>

      <div className="nav__menu">
        <span>자유게시판</span>
        <span>중고마켓</span>
      </div>
      <Button text="로그인" />
    </div>
  );
};

export default GNB;
