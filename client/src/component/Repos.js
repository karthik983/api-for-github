import React, { useContext } from 'react';

import RepoItem from './RepoItem';

import GitHubContext from '../context/GitHub/gitHubContext';

const Repos = () => {
	const gitHubContext = useContext(GitHubContext);
	const { repos } = gitHubContext;
	return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};


export default Repos;
