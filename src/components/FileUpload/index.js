import React, { useState } from 'react';
import firebase from 'firebase';
import './style.scss';

const FileUpload = () => {
	const [uploadValue, setUploadValue] = useState(0);
	const [picture, setPicture] = useState(null);

	const handleUpload = (event) => {
		const file = event.target.files[0];
		const storageRef = firebase
			.storage()
			.ref(`/Fotos/${file.name}`);
		const task = storageRef.put(file);

		task.on(
			'state_changed',
			(snapshot) => {
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) *
					100;
				setUploadValue(percentage);
			},
			(error) => {
				console.log(error.message);
			},
			() => {
				storageRef.getDownloadURL().then((url) => {
					setPicture(url);
				});
			}
		);
	};

	console.log(picture);

	return (
		<div className='form'>
			<progress
				className='form__progress'
				value={uploadValue}
				max='100'
			></progress>
			<div className='form__file'>
				<p>Subir archivo</p>
				<input
					className='form__file-file'
					type='file'
					onChange={handleUpload}
				/>
			</div>
			<img className='form__img' src={picture} alt='' />
		</div>
	);
};

export default FileUpload;
