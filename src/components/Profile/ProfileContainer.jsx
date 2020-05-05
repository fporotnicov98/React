import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/profile-reducer'
import Profile from './Profile'
import { setUsersAC } from '../../Redux/user-reducer'


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => { dispatch(addPostActionCreator()) },
		updateNewPostText: (post) => { dispatch(updateNewPostTextActionCreator(post)) },
		setPosts: (users) => {dispatch(setUsersAC(users))}
	}
}

let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default ProfileContainer;