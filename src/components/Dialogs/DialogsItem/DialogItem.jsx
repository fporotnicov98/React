import React from 'react'
import style from './../Dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/messages/' + props.id;

    return (
        <NavLink to={path} className={style.dialog} activeClassName={style.active}>
            <div className={style.photo}></div>
            <div className={style.name}>{props.name}</div>
        </NavLink>
    )
}

export default DialogItem;