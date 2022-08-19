import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">safa mohamed</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertRoundedIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomright">
            <div className="postCommentText">9 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
