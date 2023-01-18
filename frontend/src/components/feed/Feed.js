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
        .then((response) => {
          if (response.status === 401) {
            window.localStorage.removeItem("token");
            navigate("/login");
          } else {
            return response.json();
          }
        })
        .then(async (data) => {
          updatePageData(data);
        });
    } else {
      navigate("/login");
    }
  }, []);

  const updatePageData = (data) => {
    window.localStorage.setItem("token", data.token);
    setToken(window.localStorage.getItem("token"));
    setPosts(data.posts);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <h2>Posts</h2>
      <button onClick={logout}>Logout</button>
      <PostInputForm token={token} updatePageData={updatePageData} />
      <div id="feed" role="feed">
        {posts.map((post) => (
          <Post post={post} key={post._id} updatePageData={updatePageData} token={token}/>
        ))}
      </div>
    </>
  );
};

export default Feed;
