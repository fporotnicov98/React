import React from 'react'
import style from './Dialogs.module.scss'
import DialogItem from './DialogsItem/DialogItem';
import My_Message from './My_Message/My_Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(item => <DialogItem name={item.name} id={item.id} />);
    let myMessageElements = state.meMessage.map(item => <My_Message me={item.message} />);

    // let newMessageElement = React.createRef();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageText = (event) => {
        let body = event.target.value;
        // let mess = newMessageElement.current.value;
        props.store.dispatch(updateNewMessageActionCreator(body))
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