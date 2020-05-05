import React from 'react'
import style from './User.module.scss'
import user from './../../asets/images/user.png'

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
                    props.users.map(u =>
                        <div key={u.id} className={style.user__item}>
                            <div className={style.avatar}>
                                <a href="#s"><img className={style.img} src={u.photos.small != null ? u.photos.small : user} alt="" /></a>
                            </div>
                            <div className={style.desc}>
                                <div className={style.fio}><a href="#s">{u.name}</a></div>
                                {/* <div className={style.info}>{u.location.city}, {u.location.country}</div> */}
                                <div className={style.to_write}><a href="#s">Write message</a></div>
                            </div>
                            <div className={style.follow}>
                                {u.followed
                                    ? <a onClick={() => { props.unFollow(u.id) }} href="#s">UNFOLLOW</a>
                                    : <a onClick={() => { props.follow(u.id) }} href="#s">FOLLOW</a>}
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={style.pages}>
                {
                    pages.map(item => {
                        return (
                            <a className={props.currentPage === item && style.page_select} href='#s' onClick={() => { props.onPageChanged(item) }}> {item}</a>
                        )
                    })
                }
            </div>
            <div className={style.show}><a href="#s">SHOW MORE</a></div>
        </section >
    )
}

export default Users;

