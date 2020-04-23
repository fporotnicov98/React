import React from 'react'
import style from './navbar.module.scss'
import NavItem from './NavItem/NavItem'

const Navbar = (props) => {

    debugger;
    let sidebar = props.store.getState().sidebar;
    let navElement = sidebar.link.map(item => <NavItem name={item.name} path={item.path} />)
    return (
        <section className={style.navbar}>
            <ul>
                {navElement}
            </ul>
        </section>
    )
}

export default Navbar;