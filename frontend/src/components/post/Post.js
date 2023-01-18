import React from "react";
import SinglePostElement from "./SinglePostElement";
import Comment from "../comment/Comment";

const Post = ({ post }) => {
  return (
    <>
      {/* div container for the whole post */}
      <div className="container mx-auto max-w-lg">
        <SinglePostElement
          id={post._id}
          message={post.message}
          createdAt={post.createdAt}
        />
        {post.comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
        <hr class="border-gray-600" />
      </div>
    </>
  );
};

export default Post;
