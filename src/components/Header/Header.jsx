import React from 'react'
import style from'./header.module.scss';


const Header = () => {
    return (
        <header className={style.header}>
            <a href="#s" className={style.logo}>VKompe</a>
        </header>
    )
}

export default Header;