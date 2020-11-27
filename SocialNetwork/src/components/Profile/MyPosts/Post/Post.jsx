import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
	return (
		<div className={s.post}>
			<img className={s.ava} src="https://pbs.twimg.com/media/DRlGYbrWsAAWTM1.jpg:large" alt="Avatar"/>

			<div className={s.content}>

				<div className={s.username} > 
					{props.userName}
				</div>

				{props.message}

	<span className={s.like} >Like {props.likes_counter}</span>

			</div>
		</div>
	);
}

export default Post;