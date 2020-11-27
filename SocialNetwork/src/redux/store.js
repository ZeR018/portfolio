import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {

	profilePage: {
		postsData: [
			{ id: 1, message: 'Hey, how are you?', likes: 23 },
			{ id: 2, message: 'Yo', likes: 15 },
			{ id: 3, message: 'It\'s my first post', likes: 69 },
			{ id: 4, message: 'Hello!', likes: 8 },
			{ id: 5, message: 'Baby don\'t heart me! Don\'t heart me! No more', likes: 666 },
		],
		newPostText: '',
	},

	dialogsPage: {
		messagesData: [
			{ id: 1, message: 'Hey, how are you?' },
			{ id: 2, message: 'Yo' },
			{ id: 3, message: 'I am a duck' },
			{ id: 4, message: 'Hello!' },
			{ id: 5, message: 'Math. analysis = mathAnal' },
			{ id: 6, message: 'React best' },
			{ id: 7, message: 'It-kamasutra' },
	],
		newMessageText: '',

		dialogsData: [
			{ id: 1, name: 'Eugene'},
			{ id: 2, name: 'Dimych'},
			{ id: 3, name: 'Karolina'},
			{ id: 4, name: 'Julia'},
			{ id: 5, name: 'Pasha'}, 
			{ id: 6, name: 'Misha'},
			{ id: 7, name: 'VladIsLove'},
		],
	},

	sidebar: {},
},

// Methods
	_callSubscriber() {
		console.log('state changed');
},
	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) { // { type: 'ADD-POST' }
		this._state.profilePage = profileReducer(this._state.profilePage, action); //Profile reducer
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action); // Dialogs reducer
		this._state.sidebar = sidebarReducer(this._state.sidebar, action); // Sidebar reducer

		this._callSubscriber(this._state);
	},

}; 

export default store;
window.store = store;
