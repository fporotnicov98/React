import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: 'Hi, how are you?', likeCount: '114' },
                { id: 2, text: 'Fuck you', likeCount: '5' },
            ],
            frends: [
                { name: 'Sergey' },
                { name: 'Nastya' },
                { name: 'Viktor' },
                { name: 'Alexey' },
            ],
            newPostText: " ",
        },
        dialogsPage: {
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
        },
        sidebar: {
            link: [
                { name: 'My profile', path: '/profile' },
                { name: 'News', path: '/news' },
                { name: 'Messages', path: '/messages' },
                { name: 'Friends', path: '/friends' },
                { name: 'Communities', path: '/communities' },
                { name: 'Photos', path: '/photos' },
                { name: 'Music', path: '/music' },
                { name: 'Videos', path: '/videos' },
                { name: 'Games', path: '/games' },
                { name: 'Market', path: '/market' },
                { name: 'Bookmarks', path: '/bookmarks' },
                { name: 'Documents', path: '/documents' }
            ]
        }
    },
    _callSubscribe() {
        console.log('Sate changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscribe(this._state)
    }
}

export default store;