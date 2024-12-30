import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import postImage from "../../public/post3.png";

const UserPage = () => {
  return (
    <div>
      <UserHeader />
      <UserPost
        likes="10"
        replies="700"
        postTitle={"This is a post title"}
        postImg={postImage}
      />
      <UserPost
        likes="10"
        replies="700"
        postTitle={"This is a post title"}
        postImg={postImage}
      />
      <UserPost
        likes="10"
        replies="700"
        postTitle={"This is a post title"}
        postImg={postImage}
      />
      <UserPost
        likes="10"
        replies="700"
        postTitle={"This is a post title"}
        postImg={postImage}
      />
    </div>
  );
};

export default UserPage;
