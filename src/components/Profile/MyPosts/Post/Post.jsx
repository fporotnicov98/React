import React from 'react'
import style from './post.module.scss'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.image}></div>
            <div className={style.text}>{props.text}</div>
            <div className={style.like}><a href="#">{props.likeCount}<span><i className="fas fa-heart"></i></span></a></div>
        </div>
    )
}

export default Post;