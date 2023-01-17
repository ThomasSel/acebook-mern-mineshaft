import React, { useEffect, useState } from "react";
import Post from "../post/Post";

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
        .then((response) => {
          if (response.status === 401) {
            window.localStorage.removeItem("token");
            navigate("/login");
          } else {
            return response.json();
          }
        })
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

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a
            className="font-lobster text-white text-center text-6xl"
            href="/posts"
          >
            acebook
          </a>
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 py-2 px-4 rounded-full"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
      <h2>Posts</h2>
      {/* <button onClick={logout}>Logout</button> */}

      <div id="feed" role="feed">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default Feed;
