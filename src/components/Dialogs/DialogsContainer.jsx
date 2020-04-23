import React from 'react'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageText = (body) => {
        props.store.dispatch(updateNewMessageActionCreator(body))
    }

    return (
        <Dialogs 
            updateNewMessage={onMessageText} 
            addMessage={addMessage} 
            dialogsData={state.dialogsPage.dialogsData} 
            meMessage={state.dialogsPage.meMessage}
            newMessageText={state.dialogsPage.newMessageText}
            />
    )
}

export default DialogsContainer;