import React, { useState } from 'react';
import firebase from 'firebase';
import FileUpload from '../../components/FileUpload/index';
import './style.scss';

const Home = () => {
	const [user, setUser] = useState(null);

	const handleAuth = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => setUser(result.user))
			.catch((error) =>
				console.log(`Error ${error.code}: ${error.message}`)
			);
	};

	const handleLogout = () => {
		firebase
			.auth()
			.signOut()
			.then((result) => setUser(null))
			.catch((error) =>
				console.log(`Error ${error.code}: ${error.message}`)
			);
	};

	const renderLoginButton = () => {
		if (user !== null) {
			return (
				<div className='login__data'>
					<img
						className='login__data-img'
						src={user.photoURL}
						alt={user.displayName}
					/>
					<p className='login__data-message'>
						Hola, {user.displayName}! has hecho login en nuestra
						app
					</p>
					<button
						className='login__button'
						onClick={handleLogout}
					>
						Salir
					</button>
					<FileUpload />
				</div>
			);
		} else {
			return (
				<button className='login__button' onClick={handleAuth}>
					Login con Google
				</button>
			);
		}
	};

	return (
		<div className='login'>
			<h1 className='login__title'>Login</h1>
			{renderLoginButton()}
		</div>
	);
};

export default Home;
