
import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

import {Route} from 'react-router-dom';

const App = (props) => {
	return (
		<div className = "container" >
			<div className = 'app-wrapper' >

				<HeaderContainer / >
				<Navbar / >
				<div className = 'app-wrapper-content' >

					<Route path='/profile/:userId?' render={ () => <ProfileContainer />} / >

					<Route path='/dialogs' render={ () => <DialogsContainer />} / >

					<Route path='/users' render={ () => <UsersContainer />}/> 

					<Route path='/news' render={ () => <News />}/> 
					<Route path='/music' render={ () => <Music />}/> 
					<Route path='/settings' render={ () => <Settings />}/>
					<Route path='/login' render={ () => <Login />}/>

				</div>
			</div>
		</div>
	);
}

export default App;