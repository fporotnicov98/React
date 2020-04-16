import React from 'react'
import style from './friends.module.scss'
import FrendsItem from './FrendsItem/FrendsItem'

const Friends = (props) => {

    let frendsElement = props.frends.map(item => <FrendsItem name={item.name} />)

    return (
        <div className={style.friends}>
            <div className={style.title}>Friends</div>
            {frendsElement}
        </div>
    )
}

export default Friends;