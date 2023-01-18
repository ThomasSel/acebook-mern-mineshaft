import React, { useEffect, useState } from "react";
// import Axios from 'axios';

function Like(props){
  const [Likes, setLikes] = useState(0)
  const [LikeAction, setLikeAction] = useState(null)
  // useEffect(() => {
  
  //   let variable = { postId: props.postId, userId: props.userId};

  //   Axios.post('/likes/getLikes', variable)
  //   .then(response => {
  //     if(response.data.success) {
  //       //How many likes does this post have
  //       setLikes(response.data.likes.length)
  //       //if I already click this like button or not
  //       response.data.lokes.map(like => {
  //         if(like.userId === props.userId){
  //           setLikeAction('liked')
  //         }
  //       })
  //     }else {
  //       alert('Failed to get likes')
  //     }
  //   })
  // },[])

  return (
    <div id="like-button" class="flex py-2 text-center">
    <a
      href="#"
      class="group mt-1 flex w-12 items-center rounded-full px-3 py-2 text-base font-medium leading-6 text-gray-500 hover:bg-blue-800 hover:text-blue-300"
    >
      <svg
        class="h-7 w-6 text-center"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </a>
    <span>Like number</span>
    </div>
  )
}

export default Like;