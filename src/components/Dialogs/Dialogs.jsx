import React from 'react'
import style from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogItem';
import MyMessage from './MyMessage/MyMessage';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(item => <DialogItem name={item.name} key={item.id} id={item.id} />);
    let myMessageElements = state.meMessage.map(item => <MyMessage me={item.message} key={item.id} />);

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageText = (event) => {
        let body = event.target.value;
        props.updateNewMessage(body);
    }

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
                        <textarea onChange={onMessageText} value={state.newMessageText}></textarea>
                        <div className={style.btn} onClick={addMessage} ><a href="#s">Submit</a></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;