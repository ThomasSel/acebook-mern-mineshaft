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
    <div class="container mx-auto max-w-lg pb-12">
      <div class="width-auto flex p-4 pb-0">
        <textarea
          type="text"
          id="postInput"
          placeholder="Add new post"
          class="textarea-bordered textarea w-full"
          value={newPost}
          onChange={handleInputChange}
        ></textarea>

        <div></div>
      </div>
      <div class="flex flex-shrink justify-end p-4">
        <button
          class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
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
