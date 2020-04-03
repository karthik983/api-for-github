import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<a href="/">
					<i className={icon}> {title}</i>{' '}
				</a>
			</h1>
			<ul>
				<li>
					<Link to="/"> Home</Link>
				</li>
				<li>
					<Link to="/about"> About </Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github App',
	icon: 'fab fa-github'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
