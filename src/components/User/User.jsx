import React from 'react'
import style from './User.module.scss'
import UserItem from './UserItem/UserItem';

const User = (props) => {
    // let userElement = props.users.map(item => <UserItem id={props.id} follow={props.follow} unFollow={props.unFollow} followed={item.followed} key={item.id} photoUrl={item.photoUrl} fio={item.fio} location={item.location} />);

    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://sun9-66.userapi.com/c636531/v636531747/8fb1/SzPYK6GXezg.jpg', fio: 'Fedor Porotnicov', location: { city: 'Tymen', country: 'Russia' }, followed: false },
                { id: 2, photoUrl: 'https://sun9-70.userapi.com/c849036/v849036460/1b553e/eN9FCyndsLc.jpg', fio: 'Sergey Golovanov', location: { city: 'Langepas', country: 'Russia' }, followed: true },
                { id: 3, photoUrl: 'https://sun9-2.userapi.com/c850420/v850420868/1dfa41/9hNsbgPcqoU.jpg', fio: 'Sergey Zaluznyak', location: { city: 'Muravlenko', country: 'Russia' }, followed: false },
                // { id: 4, fio: 'Jack Doulson', location: { city: 'New-York', country: 'USA' }, followed: false },
                // { id: 5, fio: 'Paulo Sabini', location: { city: 'Rim', country: 'Italy' }, followed: true },
                // { id: 6, fio: 'Andres Iniesta', location: { city: 'Madrid', country: 'Spany' }, followed: false },
                // { id: 7, fio: 'Hui Lin', location: { city: 'Pekin', country: 'China' }, followed: true },
                // { id: 8, fio: 'Nikolay Petrov', location: { city: 'Moskay', country: 'Russia' }, followed: true },
                // { id: 9, fio: 'Henrik Olsen', location: { city: 'Oslo', country: 'Nordway' }, followed: false },
            ]
        )
    }


    return (
        <section className={style.user}>
            <div className={style.user__row}>
                {/* {userElement} */}
                {
                    props.users.map(u =>
                        <div key={u.id} className={style.user__item}>
                            <div className={style.avatar}>
                                <a href="#s"><img className={style.img} src={u.photoUrl} alt="" /></a>
                            </div>
                            <div className={style.desc}>
                                <div className={style.fio}>{u.fio}</div>
                                <div className={style.info}>{u.location.city}, {u.location.country}</div>
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
            <div className={style.show}><a href="#s">SHOW MORE</a></div>
        </section>
    )
}

export default User;
