import React, { useEffect, useState } from 'react';
import Post from '../post/Post'

const Feed = ({ navigate }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    if(token) {
      fetch("/posts", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          setPosts(data.posts);
        })
    }
    // else {
    //   navigate('/login')
    // }
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ message: newPost })
    })

      .then(response => {
        if(response.status === 201) {
          // navigate('/posts')
          console.log("yay")
          // console.log(response.json())
          window.location.reload();


          posts.push(newPost);
          return response.json()
        } else {
          console.log("noooo")
          // navigate('/signup')
        }
      }).then(async data => {
        console.log(data);
      })
      
  }


  const handleNewPost = (event) => {
    setNewPost(event.target.value)
  }
    

  const logout = () => {
    window.localStorage.removeItem("token")
    navigate('/login')
  }
  
    if(token) {
      return(
        <>
          <h2>Posts</h2>
            <button onClick={logout}>
              Logout
            </button>

          <div id='feed' role="feed">
              {posts.map(
                (postObject) => ( <Post post={ postObject } key={ postObject._id } /> )
              )}
          </div>
          <form onSubmit={handleSubmit}>
            <input placeholder="Make your post!" id="post" type='text' value={ newPost } onChange={handleNewPost} />
            <input id='submit' type="submit" value="Submit" />
          </form>
        </>
      )
    } else {
      navigate('/signin')
    }
}

export default Feed;
