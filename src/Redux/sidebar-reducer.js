
let initialState = {
    link: [
        { id: 1, name: 'My profile', path: '/profile' },
        { id: 2, name: 'News', path: '/news' },
        { id: 3, name: 'Messages', path: '/messages' },
        { id: 4, name: 'Friends', path: '/friends' },
        { id: 5, name: 'Communities', path: '/communities' },
        { id: 6, name: 'Photos', path: '/photos' },
        { id: 7, name: 'Music', path: '/music' },
        { id: 8, name: 'Videos', path: '/videos' },
        { id: 9, name: 'Games', path: '/games' },
        { id: 10, name: 'Market', path: '/market' },
        { id: 11, name: 'Bookmarks', path: '/bookmarks' },
        { id: 12, name: 'Documents', path: '/documents' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;