import React from 'react'
import prel from './../../../asets/images/prel.svg'
import style from './../common.scss'


let Preloader = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img className={style.prel} src={prel} alt='' />
        </div>
    )
}

export default Preloader;