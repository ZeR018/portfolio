import React from 'react';
import styles from './Users.module.css';
import userPhoto2 from "../../assets/image/user1.jpg";
import { NavLink } from 'react-router-dom';

let Users = (props) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	pages.length = pagesCount;
	for (let i = 0; i < pagesCount; i++) {
		pages[i] = (i + 1);
	}
	return <div>
		<div className={styles.spansContainer} >
			{pages.map(p => {
				return <span className={props.currentPage === p && styles.selectPage}
					onClick={() => { props.onPageChanged(p); }} >{p}</span>
			})}
		</div>
		{
			props.users.map(u => <div key={u.id}>
				<div className={styles.user}>

					<div className={styles.notInfo}>
						<NavLink to={'/profile/' + u.id} >
							<img src={u.photos.small != null ? u.photos.small : userPhoto2} className={styles.userAva} alt="phot" />
						</NavLink>
						{u.followed
							? <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.followButton} onClick={() => {props.unfollow(u.id);}} >Unfollow</button>

							: <button disabled={props.followingInProgress.some(id => id === u.id)} className={styles.followButton} onClick={() => { props.follow(u.id)}} >Follow</button>
						}
					</div>

					<div className={styles.info}>
						<div className={styles.mainInfo}>
							<span className={styles.userName}>{u.name}</span>
							<span className={styles.userStatus}>{u.status}</span>
						</div>
						<div className={styles.locationInfo}>
							<span className={styles.country}>{"u.location.country"}</span>
							<span className={styles.city}>{"u.location.city"}</span>
						</div>

					</div>
				</div>

			</div>)
		}


	</div>
}

export default Users;