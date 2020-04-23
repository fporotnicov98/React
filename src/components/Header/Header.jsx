import React from 'react'
import style from'./header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to='/' className={style.logo}>VKompe</NavLink>
        </header>
    )
}

export default Header;