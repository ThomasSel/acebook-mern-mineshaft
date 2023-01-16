import Post from "../post/Post";
import PostInputForm from "../postInputForm/PostInputForm";
import React, { useEffect, useState } from "react";

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

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
    } else {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  if (token) {
    return (
      <>
        <h2>Posts</h2>
        <button onClick={logout}>Logout</button>

        <PostInputForm token={token} setToken={setToken} setPosts={setPosts} />

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
