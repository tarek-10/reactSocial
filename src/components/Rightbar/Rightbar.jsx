import React from "react";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
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
         {Users.map((u)=>{
        return   <Online key={u.id} user={u}/>
         })}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
