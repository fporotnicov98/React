import React from 'react'
import style from './../User.module.scss'


const UserItem = (props) => {
    
    return (
        <div className={style.user__item}>
            <div className={style.avatar}>
                <a href="#s"><img className={style.img} src={props.photoUrl} alt="" /></a>
            </div>
            <div className={style.desc}>
                <div className={style.fio}>{props.fio}</div>
                <div className={style.info}>{props.location.city}, {props.location.country}</div>
                <div className={style.to_write}><a href="#s">Write message</a></div>
            </div>
            <div className={style.follow}>
                {props.followed
                    ? <a onClick={() => { props.unFollow(props.id) }} href="#s">UNFOLLOW</a>
                    : <a onClick={() => { props.follow(props.id) }} href="#s">FOLLOW</a>}

            </div>
        </div>
    )
}

export default UserItem;