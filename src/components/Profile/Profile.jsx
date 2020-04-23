import React from 'react'
import style from './Profile.module.scss';
import Friends from './Friends/Friends';
import MyPostsContainer from './MyPosts/MyPostsContainer';


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
    debugger;
    return (
        <section className={style.profile}>
            <div className={style.profile__row}>
                <div className={style.left}>
                    <Avatar />
                    <Friends store={props.store} />
                </div>
                <div className={style.right}>
                    <Desc />
                    <MyPostsContainer store={props.store}/>
                </div>
            </div>
        </section >
    )
}


export default Profile;