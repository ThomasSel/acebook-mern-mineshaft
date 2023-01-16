import Post from "../post/Post";
import React, { useEffect, useState } from "react";

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if (token) {
      fetch("/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setPosts(data.posts);
        });
    }
    // else {
    //   navigate('/login')
    // }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
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

  const handleInputChange = (event) => {
    setNewPost(event.target.value);
  };

  if (token) {
    return (
      <>
        <h2>Posts</h2>
        <button onClick={logout}>Logout</button>

        <form onSubmit={handleSubmit}>
          <textarea
            id="postInput"
            placeholder="Add a new post"
            onChange={handleInputChange}
            value={newPost}
          ></textarea>
          <input id="submitPost" type={"submit"} value={"submit"}></input>
        </form>

        <div id="feed" role="feed">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </>
    );
  } else {
    navigate("/signin");
  }
};

export default Feed;
