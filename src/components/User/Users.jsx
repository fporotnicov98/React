import React from 'react'
import style from './User.module.scss'
import photo from './../../asets/images/user.png'
import { NavLink } from 'react-router-dom';
// import { followApi } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <section className={style.user}>
            <div className={style.user__row}>
                {
                    props.users.map(user =>
                        <div key={user.id} className={style.user__item}>
                            <div className={style.avatar}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={style.img} src={user.photos.small != null ? user.photos.small : photo} alt="" />
                                </NavLink>
                            </div>
                            <div className={style.desc}>
                                <div className={style.fio}><NavLink to={'/profile/' + user.id}>{user.name}</NavLink></div>
                                {/* <div className={style.info}>{u.location.city}, {u.location.country}</div> */}
                                <div className={style.to_write}><a href="#s">Write message</a></div>
                            </div>
                            <div className={style.follow}>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.unFollow(user.id)
                                    }}>UNFOLLOW</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.follow(user.id)
                                    }}>FOLLOW</button>}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={style.pages}>
                {
                    pages.map(item => {
                        return (
                            <a key={item.id} className={props.currentPage === item && style.page_select} href='#s' onClick={() => { props.onPageChanged(item) }}> {item}</a>
                        )
                    })
                }
            </div>
            <div className={style.show}><a href="#s">SHOW MORE</a></div>
        </section >
    )
}

export default Users;

