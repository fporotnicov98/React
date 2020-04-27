
import { connect } from 'react-redux';
import User from './User';
import { followAC, unFollowAC, setUsersAC } from '../../Redux/user-reducer';

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer;
