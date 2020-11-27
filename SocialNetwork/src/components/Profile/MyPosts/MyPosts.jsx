import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {

	// Mapping data
	let postsElements = props.postsData.map(p => <Post message={p.message} likes_counter={p.likes} key={p.id} />);

	let newPostElement = React.createRef();
	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange =() => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	// Return
	return (
		<div className={s.MyPosts}>
			<div>
				My posts

				<div>
					<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
					<button onClick={onAddPost} >Add post</button>
				</div>

				<div className={s.posts}>
					{postsElements}
				</div>
			</div>

		</div>
	);
}

export default MyPosts;