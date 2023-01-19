import React from 'react';
import './styles/index.scss';

const CountryFilter = () => {
	const countries = ['Polska', 'Czechy', 'Niemcy'];

	const allOptions = countries.map((option, index) => {
		return <option key={index}>{option}</option>;
	});

	const onCountryChangeHandler = (e) => {
		console.log('user selected', e.target.value);
	};

	return (
		<div className="countrySelect">
			<label htmlFor="countrySelect">Wybierz kraj:</label>
			<select id="countrySelect" onChange={onCountryChangeHandler}>
				{allOptions}
			</select>
		</div>
	);
};

export default CountryFilter;
