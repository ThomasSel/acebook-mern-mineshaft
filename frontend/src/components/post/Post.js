import React from "react";
import SinglePostElement from "./SinglePostElement"

const Post = ({ post }) => {
  return (
    <>
      <SinglePostElement
        id={post._id}
        message={post.message}
        createdAt={post.createdAt}
      />
    </>
  );
};

export default Post;
