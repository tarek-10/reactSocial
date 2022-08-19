import React from "react";
import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleOutline,
  Group,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidbarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidbarIcon" />
            <span className="sidebarListItemTect">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidbarIcon" />
            <span className="sidebarListItemTect">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleOutline className="sidbarIcon" />
            <span className="sidebarListItemTect">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidbarIcon" />
            <span className="sidebarListItemTect">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidbarIcon" />
            <span className="sidebarListItemTect">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidbarIcon" />
            <span className="sidebarListItemTect">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidbarIcon" />
            <span className="sidebarListItemTect">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidbarIcon" />
            <span className="sidebarListItemTect">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidbarIcon" />
            <span className="sidebarListItemTect">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohame</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">tamer Mohamed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
