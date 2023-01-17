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
        window.localStorage.setItem("token", data.token);
        props.setToken(window.localStorage.getItem("token"));
        props.setPosts(data.posts);
      });
  };

  return (
    <div className="form-control">
      <div className="input-group input-group-lg justify-center">
        <input
          type="text"
          id="postInput"
          placeholder="Add new post"
          className="input input-bordered w-1/5"
          value={newPost}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-square w-20"
          id="submitPost"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PostInputForm;
