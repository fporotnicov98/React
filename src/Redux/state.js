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
        ]
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

export default state;