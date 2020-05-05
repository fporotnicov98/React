import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toogleIsFetchingAC } from '../../Redux/user-reducer';
import React from 'react'
import * as axios from 'axios';
import style from './User.module.scss'
import Users from './Users';
import prel from './../../asets/images/prel.svg'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(Response => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(Response.data.items);
            // this.props.setTotalUsersCount(Response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(Response => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(Response.data.items)
        })
    }
    render() {
        return <>
            {this.props.isFetching ? <div className={style.preloader}><img src={prel} /></div> : null}
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unFollow: (userId) => { dispatch(unFollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
        setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
        toogleIsFetching: (isFetching) => { dispatch(toogleIsFetchingAC(isFetching)) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
