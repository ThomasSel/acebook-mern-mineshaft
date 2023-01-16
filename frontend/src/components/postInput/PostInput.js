import React, { useState } from "react";

const PostInput = (props) => {
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
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: newPost }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        window.localStorage.setItem("token", data.token);
        setToken(window.localStorage.getItem("token"));
        setPosts(data.posts);
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
  ) 

}