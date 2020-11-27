import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

// Mapping data
	let dialogsElements = props.dialogsPage.dialogsData.map( d => <DialogItem id={d.id} name={d.name} key={d.id} />);
	let messagesElements = props.dialogsPage.messagesData.map(m => <Message className={s.message} message={m.message} key={m.id} />);

	let newMessageElement = React.createRef();
	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageChange(text);
	}



// Return
	return (
		<div className={s.dialogs}>

			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>

			<div className={s.messages}>
				{messagesElements}

				<div className={s.textInput}>
					<textarea autoFocus rows='1' ref={newMessageElement} 
										onChange={onMessageChange} 
						value={props.dialogsPage.newMessageText} 
										className={s.messageTextarea}
										placeholder="Enter a message" />
					<button onClick={onSendMessageClick} className={s.messageButton}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;