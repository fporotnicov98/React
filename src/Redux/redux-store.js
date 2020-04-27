import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./user-reducer";

let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebar: sidebarReducer,
    userPage: userReducer
})

let store = createStore(reducers);

window.store = store;

export default store;