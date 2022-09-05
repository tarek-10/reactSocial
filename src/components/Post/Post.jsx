import React ,{useState} from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import "./Post.css";
import { Users } from "../../dummyData";
const Post = ({ posts }) => {

  const [like , setLike] = useState(posts.like);
  const [isLike , setIsLike] = useState(false);

  const likeHandler = ()=>{
    setLike(isLike? like-1 : like +1);
    setIsLike(!isLike)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                Users
                  ? Users.filter((u) => u.id == posts.userId)[0].profilePicture
                  : "no pic"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users
                ? Users.filter((u) => u.id == posts.userId)[0].username
                : "user not found"}
            </span>
            <span className="postDate">{posts.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertRoundedIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{posts.desc}</span>
          <img src={posts.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomright">
            <div className="postCommentText">{posts.comment} comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
