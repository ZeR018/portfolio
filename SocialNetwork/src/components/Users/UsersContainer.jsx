import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, unfollow, follow} from '../../redux/usersReducer';
import Users from './Users';
import styles from './Users.module.css';
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(this.props.pageSize, pageNumber);
	}

	render() {
		return (
			<div className={styles.users}>
				
				{this.props.isFetching ? <Preloader /> : 
				
				<Users totalCount={this.props.totalCount}
								pageSize={this.props.pageSize}
								currentPage={this.props.currentPage}
								unfollow={this.props.unfollow}
								follow={this.props.follow}
								onPageChanged={this.onPageChanged}
								users={this.props.users} 
								followingInProgress={this.props.followingInProgress}
								/>}
			</div>
		)}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers })
)(UsersContainer);