const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_POSTS = 'SET-POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_LIKE = 'SET_LIKE';

let initialState = {
    profile: null,
    posts: [
        // { id: 1, text: 'Hi, how are you?', likeCount: '114' },
        // { id: 2, text: 'Fuck you', likeCount: '5' },
    ],
    frends: [
        { id: 1, name: 'Sergey' },
        { id: 2, name: 'Nastya' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'Alexey' },
    ],
    newPostText: " ",
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (!(!action.enterText && action.enterText.length < 8)) {
                let newPost = {
                    id: 0,
                    text: action.enterText,
                    likeCount: 0,
                };
                return {
                    ...state,
                    posts: [...state.posts.map(item => {
                        item.id++
                        return { ...item }
                    }), newPost],
                };
            } else alert('Нужно написать не меньше 8 символов')
            break;
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_LIKE:
            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === action.postId) {
                        item.likeCount++
                        return { ...item }
                    } else return item
                })
            }
        default:
            return state;
    }
}

export const addPost = (enterText) => ({ type: ADD_POST, enterText });
export const updateNewPostText = (value) => ({ type: UPDATE_NEW_POST_TEXT, newText: value, });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setLike = (postId) => ({ type: SET_LIKE, postId });

export default profileReducer;