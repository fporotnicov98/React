import React from 'react'
import style from './../friends.module.scss'

const FrendsItem = (props) => {

    return (
        <div className={style.friend}>
            <div className={style.image}></div>
            <div className={style.name}>{props.name}</div>
        </div>
    )
}

export default FrendsItem;