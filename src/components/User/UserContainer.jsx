import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching } from '../../Redux/user-reducer';
import React from 'react'
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { userApi } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);

        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
            // this.props.setTotalUsersCount(Response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items)
        });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
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
        isFetching: state.userPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching })(UsersContainer)
