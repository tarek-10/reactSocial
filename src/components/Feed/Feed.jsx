import React from "react";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../dummyData.js";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts
          ? Posts.map((p) => <Post key={p.id} posts={p} />)
          : "There Is No Posts To Share..!"}
      </div>
    </div>
  );
};

export default Feed;
