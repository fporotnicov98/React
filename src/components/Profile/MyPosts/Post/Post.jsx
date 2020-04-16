import React from 'react'
import style from './post.module.scss'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.image}></div>
            <div className={style.text}>{props.text}</div>
            <div className={style.like}>{props.likeCount}<span><i class="fas fa-heart"></i></span></div>
        </div>
    )
}

export default Post;