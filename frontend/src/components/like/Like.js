import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Like(props){
  const [Likes, setLikes] = useState(0)
  const [LikeAction, setLikeAction] = useState(null)
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  console.log(token)

  useEffect(() => {
  
    // let variable = { postId: props.postId, userId: props.userId};

    
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
          console.log(`like: ${like.postId}`)
          console.log(`props: ${props.postId}`)
          if(like.userId === props.userId){
            console.log(`like.userId:${like.userId}`)
            console.log(`props.postId: ${props.postId}`)
            console.log(`props.userId: ${props.userId}`)
            setLikeAction('liked')
          }else{
            setLikeAction(null)
          }
        })
        console.log(Likes);
      }else {
        alert('Failed to get likes')
      }
    }
    )
  },[])

  const handleClick = (event) => {
    //Axios.post
    if(token){
    event.preventDefault();
    console.log(JSON.stringify({ postId: props.postId}))

    fetch('/likes',{
      method: 'post',
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`},
        body: JSON.stringify({ postId: props.postId})
    })
    .then((response) => {
      console.log(`response.json: ${response.json()}`)
      return response.json()
      
    })
    
    .catch(err => console.error(err))

    .then(async (data) => {
      console.log(`data: ${data}`)
      window.localStorage.setItem("token", data.token);
      setToken(window.localStorage.getItem("token"));
      setLikes(data.likes.length);
      console.log(`likes: ${data.likes.length}`)
    })
    .then(response => {
      if(response.data.success) {
        console.log(`response.data: ${response.data}`)
        //How many likes does this post have
        setLikes(response.data.likes.length)
        //if I already click this like button or not
        response.data.likes.map(like => {
          if(like.postId === props.postId){
            setLikeAction('liked')
          }
        })
        console.log(Likes);
      }else {
        alert('Failed to get likes')
      }
    }
    );
  }
  }

  return (
    <div id="like-button" class="flex py-2 text-center">
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
    </div>
  )
}

export default Like;