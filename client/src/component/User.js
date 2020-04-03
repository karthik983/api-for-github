import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from './spinner';
import Repos from './Repos';

import GitHubContext from '../context/GitHub/gitHubContext';

const User = ({ match }) => {

	const gitHubContext = useContext(GitHubContext);

	const {user,loading,getUser, getUserRepos} = gitHubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		company,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	if (loading) {
		return <Spinner />;
	}
	return (
		<div className="container">
			<Link to="/" className="btn btn-light">
				Back to Search
			</Link>
			Hireable :{' '}
			{hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-check text-success" />}
			<div className="card grid-2">
				<div className="all-center">
					<img src={avatar_url} className="round-img" style={{ width: '150px' }} alt="" />
					<h3> Name : {name}</h3>
					<h3> Location : {location}</h3>
				</div>
				<div>
					{bio && (
						<Fragment>
							<h3> Bio</h3>
							<p> {bio}</p>
						</Fragment>
					)}
					<a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark my-1 ">
						{' '}
						View Profile in GitHub
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>UserName</strong> : {login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company</strong> : {company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website </strong>: {blog}
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">Followers : {followers}</div>
				<div className="badge badge-success"> Following : {following}</div>
				<div className="badge badge-light"> Public Repositories : {public_repos}</div>
				<div className="badge badge-dark"> Public Gists : {public_gists}</div>
			</div>
			<Repos />
		</div>
	);
};


export default User;
