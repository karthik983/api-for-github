import React, { useContext, useEffect } from 'react';
import Useritem from './Useritem';
import Spinner from './spinner';
import GithubContext from '../context/GitHub/gitHubContext';

const Users = () => {
	const gitHubContext = useContext(GithubContext);
	const { loading, users, allUsers } = gitHubContext;

	useEffect(() => {
		allUsers();
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<div className="container" style={userStyles}>
				{users.map((user) => <Useritem key={user.id} user={user} />)}
			</div>
		);
	}
};

const userStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem'
};

export default Users;
