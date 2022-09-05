import React from "react";
import "./Online.css";
const Online = ({user}) => {
  return (
 
      <li className="rightbarFriend">
        <div className="rightbarProfileContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightUserName">{user.username}</span>
      </li>

  );
};

export default Online;
