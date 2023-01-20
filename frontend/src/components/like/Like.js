import React, { useEffect, useState, Fragment } from "react";
import Axios from 'axios';
// import { ReactDOM } from "react";

// const root = ReactDOM.createRoot(document.getElementById('like-button'))
// // root.render()

function Like(props){
  const [Likes, setLikes] = useState(0)
  const [LikeAction, setLikeAction] = useState(null)
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [UserArray, setUserArray] = useState([]);

  function parseJwt(token) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
const props_userId = parseJwt(token).user_id

  useEffect(() => {
    Axios.get(`/likes/${props.postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    .then(response => {
      if(response.data.success) {
        //How many likes does this post have
        setLikes(response.data.likes.length)
        //if I already click this like button or not
        response.data.likes.map(like => {
          if(like.userId === props_userId){
            setLikeAction('liked')
          }
        })
        const newArray = []
        response.data.likes.map(like => {
          console.log(like)
          newArray.push(like.userId)
        })
        setUserArray(newArray)
        console.log(UserArray)

      }else {
        alert('Failed to get likes')
      }
    }
    )
  },[])

  const handleClick = (event) => {
    event.preventDefault();
    // window.location.reload(true)
    //Axios.post
    if(token) {

      fetch("/likes", {
        method: "post",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ postId: props.postId})
      }
      )
      .then((response) =>{ 
        return response.json()
      })
      .then(async(data) => {
        setLikes(data.likes.length)
        data.likes.map(like => {
          if(like.userId === props_userId){
            setLikeAction('liked')
          }
        })
      })
      
      .catch(err => console.error(err))
    }
  }

  
  return (
   
    <div id="like-button" class="flex py-2 text-center">
     <Fragment >
    <button
      // href="#"
      onClick={handleClick}
      class="group mt-1 flex w-12 items-center rounded-full px-3 py-2 text-base font-medium leading-6 text-gray-500 hover:bg-blue-800 hover:text-blue-300"
    >
      <svg
        class="h-7 w-6 text-center"
        fill={LikeAction === 'liked' ? 'currentColor' : 'none'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </button>
    <span>{Likes}</span>
    </Fragment>
    </div>
    
  )
}

export default Like;