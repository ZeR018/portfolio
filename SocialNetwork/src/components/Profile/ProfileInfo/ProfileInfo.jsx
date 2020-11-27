import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
	
	if(!props.profile) {
		return <Preloader />
	}
	debugger
	return (
			<div className={s.profileInfo}>

					{/* < img className={s.header_img} src="https://avatars.mds.yandex.net/get-pdb/788379/9abb261f-08e5-4521-a493-160c5ad2ad90/s1200?webp=false" alt="header" /> */}

				<div className={s.description}>
				{
					props.profile.photos.large 
					? < img className={s.avatar_img} src={props.profile.photos.large} alt="" />
					: < img className={s.avatar_img} 
							src={"https://i.livelib.ru/auface/471251/o/ab9f/Yurij_Belous.jpg"} alt="" />
				}
				<ProfileStatus />
					<div className={s.info}>
						<div>{props.profile.aboutMe}</div>
						<span>My website: {props.profile.contacts.website}</span>
					</div>
				</div>
			</div>


	);
}

export default ProfileInfo;