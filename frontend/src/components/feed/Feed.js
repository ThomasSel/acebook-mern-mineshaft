import React, { useEffect, useState } from "react";
import Post from "../post/Post";

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  // new post bar and logic for testing purposes
  const [newPost, setNewPost] = useState("");

  const updatePosts = () => {
    fetch("/posts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        window.localStorage.setItem("token", data.token);
        setToken(window.localStorage.getItem("token"));
        console.log(data.posts)
        setPosts(data.posts);
      });
  };

  useEffect(() => {
    if (token) {
      updatePosts();
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ message: newPost }),
    })
      .then((response) => {
        updatePosts();
        if (response.status === 201) {
          // navigate('/posts')
          console.log("yay");
          // console.log(response.json())
          // return response.json()
        } else {
          console.log("noooo");
          // navigate('/signup')
        }
      })
      .then(async (data) => {
        console.log(data);
      });
  };

  const handleNewPost = (event) => {
    setNewPost(event.target.value);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };
  // end

  if (token) {
    return (
      <>
        <h2>Posts</h2>
        <button onClick={logout}>Logout</button>

        {/* new post prototype for testing */}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Type your post here"
            id="newPost"
            type="newPost"
            value={newPost}
            onChange={handleNewPost}
          />
          <input
            role="submit-button"
            id="submit"
            type="submit"
            value="Submit"
          />
        </form>
        {/* end */}

        <div class="" id="feed" role="feed">
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
