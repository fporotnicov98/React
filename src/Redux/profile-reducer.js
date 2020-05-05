const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_POSTS = 'SET-POSTS'

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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts]
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (value) => ({ type: UPDATE_NEW_POST_TEXT, newText: value, });

export const setPostsAC = (users) => ({ type: SET_POSTS, users });

export default profileReducer;