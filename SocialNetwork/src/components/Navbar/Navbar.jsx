import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className='navbar'>
			< nav className={s.nav} >

				<NavLink to="/profile" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>Profile</span>
				</NavLink>

				<NavLink to="/dialogs" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>Messages</span>
				</NavLink>

				<NavLink to="/users" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>Users</span>
				</NavLink>

				<NavLink to="/news" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>News</span>
				</NavLink>

				<NavLink to="/music" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>Music</span>
				</NavLink>

				<NavLink to="/settings" className={s.item} activeClassName={s.activeLink}>
					<span className={s.link}>Settings</span>
				</NavLink>

			</nav> 
		</div>
	);
}

export default Navbar;



{/* <div>
					<NavLink className={s.item} to='/profile' >Profile</NavLink>
				</div>
				<div>
					<NavLink className={s.item} to='/dialogs'>Messages</NavLink>
				</div>
				<div>
					<NavLink className={s.item} to='/news'>News</NavLink>
				</div>
				<div>
					<NavLink className={s.item} to='/music'>Music</NavLink>
				</div>
				<div>
					<NavLink className={s.item} to='/settings'>Settings</NavLink>
				</div> */}
