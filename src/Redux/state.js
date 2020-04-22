import { act } from "react-dom/test-utils";

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
        navigations: {
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscribe(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscribe(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.meMessage.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscribe(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscribe(this._state);
        }
    }
}

export default store;