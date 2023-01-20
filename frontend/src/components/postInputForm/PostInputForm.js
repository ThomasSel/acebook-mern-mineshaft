import React, { useState } from "react";

const PostInputForm = (props) => {
  const [newPost, setNewPost] = useState("");

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newPost.trim().length === 0) return;

    fetch("/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({ message: newPost }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        props.updatePageData(data);
        setNewPost('');
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
          value={newPost}
          onChange={handleInputChange}
        ></textarea>

        <div></div>
      </div>
      <div className="flex flex-shrink justify-end p-4">
        <button className="btn btn-sm" id="submitPost" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostInputForm;
