import React from "react";
import SinglePostElement from "./SinglePostElement";
import Comment from "../comment/Comment";

const Post = ({ post }) => {
  return (
    <>
      <SinglePostElement
        id={post._id}
        message={post.message}
        createdAt={post.createdAt}
      />
      {post.comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </>
  );
};

export default Post;
