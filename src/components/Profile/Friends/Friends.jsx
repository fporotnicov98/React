import React from 'react'
import style from './friends.module.scss'

const Friends = (props) => {
    return (
        <div className={style.friends}>
            <div className={style.title}>Friends</div>
            {
                props.profilePage.frends.map(item =>
                    <div key={item.id} className={style.friend}>
                        <div className={style.image}></div>
                        <div className={style.name}>{item.name}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Friends;