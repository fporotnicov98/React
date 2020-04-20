import {rerenderEntireTree} from './../render'

let state = {
    profilePage: {
        posts: [
            { id: 1, text: 'Hi, how are you?', likeCount: '114' },
            { id: 2, text: 'Fuck you', likeCount: '5' },
        ],
        frends:[
            {name: 'Sergey'},
            {name: 'Nastya'},
            {name: 'Viktor'},
            {name: 'Alexey'},
        ],
        newPostText: "Enter to text",
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
        ]
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
}

export let addMessage = (messages) => {
    let newMessage = {
        id: 4,
        message: messages,
    };

    state.dialogsPage.meMessage.push(newMessage);
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likeCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) =>  {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;