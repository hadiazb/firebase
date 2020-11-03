import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './router/App';
import './styles/Global.scss';

firebase.initializeApp({
	apiKey: 'AIzaSyA1mByeK5flJ6Ur8wHRSKuzT5x5mofcuf0',
	authDomain: 'filestorage-b0456.firebaseapp.com',
	databaseURL: 'https://filestorage-b0456.firebaseio.com',
	projectId: 'filestorage-b0456',
	storageBucket: 'filestorage-b0456.appspot.com',
	messagingSenderId: '341035177924',
	appId: '1:341035177924:web:1a782d7eb7cbd25b67f691',
	measurementId: 'G-QHHTYR9FCP',
});

ReactDOM.render(<App />, document.getElementById('app'));
