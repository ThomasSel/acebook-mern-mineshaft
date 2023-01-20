import React from "react";
import SinglePostElement from "./SinglePostElement"

const Post = ({ post }) => {
  return (
    <>
      <SinglePostElement
        id={post._id}
        photoUrl = {post.photoUrl}
        firstName={post.firstName}
        lastName={post.lastName}
        message={post.message}
        createdAt={post.createdAt}
      />
    </>
  );
};

export default Post;
