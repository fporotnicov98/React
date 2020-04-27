import React from 'react'
import style from './navbar.module.scss'
import NavItem from './NavItem/NavItem'

const Navbar = (props) => {

    let state = props.sidebar;
    let navElement = state.link.map(item => <NavItem name={item.name} key={item.id} path={item.path} />)
    return (
        <section className={style.navbar}>
            <ul>
                {navElement}
            </ul>
        </section>
    )
}
export default Navbar;