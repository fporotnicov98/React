const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Fedya' },
        { id: 2, name: 'Sergey' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Vova' },
        { id: 6, name: 'Nastya' },
    ],
    meMessage: [
        { id: 1, message: 'Lorem ipsum dolor sit.' },
        { id: 2, message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
        { id: 3, message: 'Lorem ipsum.' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                meMessage: [...state.meMessage, { id: 4, message: state.newMessageText }],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const updateNewMessageActionCreator = (value) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: value,
})

export default dialogsReducer;