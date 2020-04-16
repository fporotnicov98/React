import React from 'react'
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import Friends from './Friends/Friends';


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
                    <Friends frends={props.state.frends}/>
                </div>
                <div className={style.right}>
                    <Desc />
                    <MyPosts posts={props.state.posts}/>
                </div>
            </div>
        </section >
    )
}


export default Profile;