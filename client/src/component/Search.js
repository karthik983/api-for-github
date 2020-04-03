import React, { useState, useContext } from 'react';
import GithubContext from '../context/GitHub/gitHubContext';
import AlertContext from '../context/Actions/alertContext';
const Search = () => {
	const gitHubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const [ text, setText ] = useState('');
	const searchMe = (e) => {
		setText(e.target.value);
	};

	const submit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Enter Your Username', 'danger');
		} else {
			gitHubContext.searchUsers(text);
			setText('');
		}
	};

	return (
		<div className="container">
			<form onSubmit={submit} className="form">
				<input type="text" value={text} name="text" placeholder="Search Users .." onChange={searchMe} />
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
			{gitHubContext.users.length > 0 && (
				<button onClick={gitHubContext.clearUsers} className="btn btn-light btn-block">
					{' '}
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
