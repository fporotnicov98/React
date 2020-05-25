import { connect } from 'react-redux'
import React from 'react'
import { addPost, updateNewPostText, setLike, getProfile, getProfileStatus, updateProfileStatus } from '../../Redux/profile-reducer'
import Profile from './Profile'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 7095
		}
		this.props.getProfile(userId);
		// setTimeout(() => {
		this.props.getProfileStatus(userId);
		// }, 1000);
	}
	render() {
		return (
			<Profile
				{...this.props} status={this.props.status} updateProfileStatus={this.props.updateProfileStatus}
			/>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
}

export default compose(
	connect(mapStateToProps, { addPost, updateNewPostText, setLike, getProfile, getProfileStatus, updateProfileStatus }),
	withRouter,
)(ProfileContainer);

// let withUrlDataContainerComponent = withRouter(ProfileContainer);

// export default withAuthRedirect(connect(mapStateToProps, { addPost, updateNewPostText, setLike, getProfile })(withUrlDataContainerComponent));