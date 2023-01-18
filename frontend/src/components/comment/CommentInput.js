import React, { useState } from "react";

const CommentInputForm = (props) => {
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newComment.trim().length === 0) return;

    fetch(`/posts/${props.post_id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({ message: newComment }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        props.updatePageData(data);
      });
  };

  return (
    <div className="container mx-auto max-w-lg pb-12">
      <div className="width-auto flex p-4 pb-0">
        <textarea
          type="text"
          id="postInput"
          placeholder="Add new post"
          className="textarea-bordered textarea w-full"
          value={newComment}
          onChange={handleInputChange}
        ></textarea>

        <div></div>
      </div>
      <div className="flex flex-shrink justify-end p-4">
        <button className="btn btn-sm" id="submitComment" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentInputForm;