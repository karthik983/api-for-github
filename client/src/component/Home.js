import React, { Fragment } from 'react';
import Search from '../component/Search';
import Users from '../component/Users';
export default function Home() {
	return (
		<Fragment>
			<Search />
			<Users />
		</Fragment>
	);
}
