import { connect } from 'react-redux'
import React from 'react'
import { addPost, updateNewPostText, setUserProfile, setLike } from '../../Redux/profile-reducer'
import Profile from './Profile'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom'
import { profileApi } from '../../api/api'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 7095
		}
		profileApi.getProfile(userId).then(data => {
			this.props.setUserProfile(data);
		})
	}
	render() {
		return (
			<Profile
				{...this.props}
			// profilePage={this.props.profilePage}
			// addPost={this.props.addPost}
			// updateNewPostText={this.props.updateNewPostText}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		profile: state.profilePage.profile
	}
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile, setLike })(withUrlDataContainerComponent);