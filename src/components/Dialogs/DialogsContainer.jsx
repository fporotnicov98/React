import { addMessage, updateNewMessage } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => { dispatch(addMessageActionCreator()) },
//         updateNewMessage: (body) => { dispatch(updateNewMessageActionCreator(body)) }
//     }
// }

let DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessage})(Dialogs);

export default DialogsContainer;