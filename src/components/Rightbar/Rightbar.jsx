import React from "react";
import "./Rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b> shady mohamed</b> and <b>3 other firends</b> have birthday today
            .
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle"> Online Friends </h4>

        <ul className="rightbarFriendsList">
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUserName">Emy mohamed</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUserName">Emy mohamed</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUserName">Emy mohamed</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUserName">Emy mohamed</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightUserName">Emy mohamed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
