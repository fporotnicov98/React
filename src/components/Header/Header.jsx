import React from 'react'
import style from './header.module.scss';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <NavLink to='/' className={style.logo}>VKompe</NavLink>
                <div className={style.login}>
                    {
                        props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                    }
                    
                </div>
            </div>

        </header>
    )
}

export default Header;