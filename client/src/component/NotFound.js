import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
	return (
		<div className="text-center">
			<h1>
				Stay Home. You are at wrong place. #FightCorona<br /><br />
				<Link to="/">Go Home </Link>
			</h1>
		</div>
	);
}
