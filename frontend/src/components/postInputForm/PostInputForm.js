import React, { useState } from "react";

const PostInputForm = (props) => {
  const [newPost, setNewPost] = useState("");

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <textarea
        id="postInput"
        placeholder="Add a new post"
        onChange={handleInputChange}
        value={newPost}
      ></textarea>
      <input id="submitPost" type={"submit"} value={"submit"}></input>
    </form>
  );
};

export default PostInputForm;
