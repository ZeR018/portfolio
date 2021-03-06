import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
		users: [],
		pageSize: 10,
		totalCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: [],
	}


const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return { 
				...state, 
				users: state.users.map( u => {
					if(u.id === action.userId) {
						return { ...u, followed: true};
					}
					return u;
				})
			}

		case UNFOLLOW:
			return { 
				...state, 
				users: state.users.map( u => {
					if(u.id === action.userId) {
						return { ...u, followed: false};
					}
					return u;
				})
			}

		case SET_USERS: 
			return { ...state, users: action.users };
		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage};
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalCount: action.totalCount};
		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state, 
				followingInProgress: action.isFetching 
				? [...state.followingInProgress, action.userId]
				: state.followingInProgress.filter(id => id !== action.userId)}
		default:
			return state;
	}
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (pageSize, currentPage) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(pageSize, currentPage).then(response => {
		dispatch(setUsers(response.items));
		dispatch(setUsersTotalCount(response.totalCount));
		dispatch(toggleIsFetching(false));
	});
};

export const unfollow = (userId) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.unfollow(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(unfollowSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
}

export const follow = (userId) => (dispatch) => {
	dispatch(toggleFollowingProgress(true, userId));
	usersAPI.follow(userId)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		});
}
// export const getUsersOnPageChanged = (pageSize, pageNumber) => (dispatch) => {
// 	dispatch(setCurrentPage(pageNumber));
// 	dispatch(toggleIsFetching(true));
// 	usersAPI.getUsers(pageSize, pageNumber).then(response => {
// 		dispatch(setUsers(response.items));
// 		dispatch(toggleIsFetching(false));
// 	});
// }

export default usersReducer;