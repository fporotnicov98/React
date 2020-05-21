import { connect } from 'react-redux'
import React from 'react'
import { addPost, updateNewPostText, setLike, getProfile } from '../../Redux/profile-reducer'
import Profile from './Profile'
// import * as axios from 'axios'
import { withRouter, Redirect } from 'react-router-dom'
// import { profileApi } from '../../api/api'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 7095
		}
		this.props.getProfile(userId);
	}
	render() {
		if (this.props.isAuth === false) return <Redirect to='/login'/> 
		return (
			<Profile
				{...this.props}xt={this.props.updateNewPostText}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth
	}
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPostText, setLike, getProfile })(withUrlDataContainerComponent);