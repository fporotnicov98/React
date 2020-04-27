import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => { dispatch(addPostActionCreator()) },
		updateNewPostText: (post) => { dispatch(updateNewPostTextActionCreator(post)) }
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;