import React from 'react';
import './header.scss';
import logo from '../../items/logo-news-new.png';

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo" />
		</div>
	);
};

export default Header;
