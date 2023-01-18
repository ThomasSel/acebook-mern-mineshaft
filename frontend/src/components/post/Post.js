import React from "react";
import SinglePostElement from "./SinglePostElement";
import Comment from "../comment/Comment";
import CommentInputForm from "../comment/CommentInput";

const Post = (props) => {
  return (
    <>
      {/* div container for the whole post */}
      <div className="container mx-auto max-w-lg">
        <SinglePostElement
          id={props.post._id}
          message={props.post.message}
          createdAt={props.post.createdAt}
        />
        <CommentInputForm post_id={props.post._id} token={props.token} updatePageData={props.updatePageData}/>
        {props.post.comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
        <hr class="border-gray-600" />
      </div>
    </>
  );
};

export default Post;
