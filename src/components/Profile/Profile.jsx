import React from 'react'
import style from './Profile.module.scss';
import Friends from './Friends/Friends';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import MyPosts from './MyPosts/MyPosts';


const Avatar = () => {
    return (
        <div className={style.avatar}>
            <div className={style.avatar__image}></div>
            <a href="#s" className={style.edit}><span>Edit</span></a>
        </div>
    )
}

const Desc = () => {
    return (
        <div className={style.description}>
            description
        </div>
    )
}

const Profile = (props) => {
    return (
        <section className={style.profile}>
            <div className={style.profile__row}>
                <div className={style.left}>
                    <Avatar />
                    <Friends profilePage={props.profilePage}/>
                </div>
                <div className={style.right}>
                    <Desc />
                    <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
                </div>
            </div>
        </section >
    )
}


export default Profile;