import React from 'react';
import './header.scss';

const Header = () => {
	return (
		<div className="header">
			<label for="countrySelect">Wybierz kraj:</label>
			<select id="countrySelect">
				<option value="pl">Polska</option>
				<option value="us">Stany Zjednoczone</option>
				<option value="fr">Francja</option>
			</select>
		</div>
	);
};

export default Header;
