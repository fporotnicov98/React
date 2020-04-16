import React from 'react'
import style from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postElements = props.posts.map(item =><Post text={item.text} likeCount={item.likeCount} />);
    
    return (
        <div className={style.posts}>
            <div className={style.title}>My posts</div>
            <textarea></textarea>
            <div className={style.btn}><a href="#s">Publish</a></div>
            {postElements}
        </div>
    )
}

export default MyPosts;