import React, { useEffect, useState } from 'react';
import './styles/index.scss';
import { useLocalStorage } from 'usehooks-ts';
import { getKeyByValue } from '../../utils/get-key';

export const countryIso = {
	Polska: 'pl',
	Czechy: 'cz',
	Niemcy: 'de',
};

const CountryFilter = () => {
	const [country, setCountry] = useLocalStorage('country', '');
	const [allOptions, setAllOptions] = useState([]);
	const countries = ['Polska', 'Czechy', 'Niemcy'];

	useEffect(() => {
		if (country.length === 0) {
			setAllOptions(
				countries.map((option, index) => {
					return <option key={index}>{option}</option>;
				})
			);
		} else {
			let keyCountry = getKeyByValue(countryIso, country);
			const filteredCountries = countries.filter(
				(country) => country !== keyCountry
			);
			filteredCountries.unshift(keyCountry);
			setAllOptions(
				filteredCountries.map((option, index) => {
					return <option key={index}>{option}</option>;
				})
			);
		}
	}, []);

	const onCountryChangeHandler = (e) => {
		console.log(countryIso[e.target.value]);
		setCountry(countryIso[e.target.value]);
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
