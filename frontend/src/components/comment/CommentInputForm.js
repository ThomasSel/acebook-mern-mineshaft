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
    <div className="container mx-auto max-w-lg">
      <div className="width-auto flex p-4 pb-0">
        <textarea
          data-cy="commentInput"
          type="text"
          id="postInput"
          placeholder="Commment on this post"
          className="textarea-bordered textarea w-full"
          value={newComment}
          onChange={handleInputChange}
        ></textarea>

        <div></div>
      </div>
      <div className="flex flex-shrink justify-end p-4">
        <button
          data-cy="commentSubmit"
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          id="submitComment"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentInputForm;
