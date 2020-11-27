import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hey, how are you?', likes: 23 },
		{ id: 2, message: 'Yo', likes: 15 },
		{ id: 3, message: 'It\'s my first post', likes: 69 },
		{ id: 4, message: 'Hello!', likes: 8 },
		{ id: 5, message: 'Baby don\'t heart me! Don\'t heart me! No more', likes: 666 },
	],
	newPostText: '',
	profile: null,
}


const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 6,
				message: state.newPostText,
				likes: 0,
			};
			
			return {
				...state,
				newPostText: '',
				postsData: [...state.postsData, newPost]
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response));
	});
}

export default profileReducer;