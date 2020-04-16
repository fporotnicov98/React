import React from 'react'
import style from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogItem';
import My_Message from './My_Message/My_Message';

const Dialogs = (props) => {

    
    
    let dialogsElements = props.state.dialogsData.map(item => <DialogItem name={item.name} id={item.id} />);
    let myMessageElements = props.state.meMessage.map(item => <My_Message me={item.message} />);

    return (
        <section className={style.messages}>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
            <div className={style.history}>
                <div className={style.history__row}>
                    <div className={style.dialog__area}>
                        {myMessageElements}
                    </div>
                    <div className={style.submit}>
                        <textarea></textarea>
                        <div className={style.btn}><a href="#s">Submit</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;