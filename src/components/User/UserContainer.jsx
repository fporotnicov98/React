import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from '../../Redux/user-reducer';
import React from 'react'
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps, { follow, unFollow, setCurrentPage, getUsers }),
    withAuthRedirect
)(UsersContainer)

