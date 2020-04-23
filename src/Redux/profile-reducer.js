const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                text: state.newPostText,
                likeCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (value) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: value,
});

export default profileReducer;