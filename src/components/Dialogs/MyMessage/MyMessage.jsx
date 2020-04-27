import React from 'react'
import style from './../Dialogs.module.scss'

const My_Message = (props) => {
    return (
        <p className={style.from__me}>{props.me}</p>
    )
}

export default My_Message;