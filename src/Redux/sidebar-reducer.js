
let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;