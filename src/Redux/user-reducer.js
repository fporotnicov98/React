import { userApi, followApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setFollow = (userId) => ({ type: FOLLOW, userId })
export const setUnFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollowingProgress = (isFollowing, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId })

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toogleIsFetching(true));
    userApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(toogleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
}

export const follow = (userId) => (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    followApi.setFollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(setFollow(userId));
        }
        dispatch(toogleFollowingProgress(false, userId))
    })
}

export const unFollow = (userId) => (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    followApi.setUnFollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUnFollow(userId));
        }
        dispatch(toogleFollowingProgress(false, userId))
    })
}

export default userReducer;

