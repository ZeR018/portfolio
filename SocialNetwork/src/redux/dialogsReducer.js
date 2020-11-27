const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
	};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 8,
				message: state.newMessageText,
			};

			return {
				...state,
				messagesData: [...state.messagesData, newMessage],
				newMessageText: ''
			};
		}
		case UPDATE_NEW_MESSAGE_TEXT: {
			return {
				...state,
				newMessageText: action.newText
			};
		}
	
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => 
	({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;