import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Like(props){
  useEffect(() => {
    const [Likes, setLikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    let variable = { postId: props.postId, userId: props.userId};

    Axios.post('/likes/getLikes', variable)
    .then(response => {
      if(response.data.success) {
        //How many likes does this post have
        setLikes(response.data.likes.length)
        //if I already click this like button or not
        response.data.lokes.map(like => {
          if(like.userId === props.userId){
            setLikeAction('liked')
          }
        })
      }else {
        alert('Failed to get likes')
      }
    })
  },[])
}

export default Like;