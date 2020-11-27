import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<div className='header'>
			< header className={s.header}>
				< img className={s.header_img} src="https://images.wallpaperscraft.ru/image/treugolnik_perevernutyy_chernyy_fon_92770_2560x1080.jpg" alt="logo" />
				<div className={s.loginBlock}>
					{props.isAuth 
							? <div className={s.login}>{props.login}</div> 
							: <NavLink className={s.loginNav} to={'/login'} > Login</NavLink>}
					
				</div>
			</header>
		</div>
	);
}

export default Header;