import { React, useState } from "react";
import SinglePostElement from "./SinglePostElement";
import Comment from "../comment/Comment";
import CommentInputForm from "../comment/CommentInputForm";

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(Boolean(showComments ^ 1));
  };

  const renderComments = () => {
    if (showComments) {
      return (
        <>
          <CommentInputForm
            post_id={props.post._id}
            token={props.token}
            updatePageData={props.updatePageData}
          />
          {props.post.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </>
      );
    }
  };

  return (
    <>
      {/* div container for the whole post */}
      <div data-cy="post" className="container mx-auto max-w-lg">
        <SinglePostElement
          id={props.post._id}
          message={props.post.message}
          createdAt={props.post.createdAt}
          toggleComments={toggleComments}
        />
        {renderComments()}
        <hr class="border-gray-600" />
      </div>
    </>
  );
};

export default Post;
