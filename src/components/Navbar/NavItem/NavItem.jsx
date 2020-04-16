import React from 'react'
import style from './../navbar.module.scss'
import { NavLink } from 'react-router-dom'

const navItem = (props) => {
    return (
        <li className={style.item}>
            <NavLink to={props.path} activeClassName={style.activeLink}>{props.name}</NavLink>
        </li>
    )
}

export default navItem;