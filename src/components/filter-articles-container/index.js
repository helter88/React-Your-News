import React from 'react';
import CountryFilter from './country-filter';
import PagesFilter from './pages-filter';
import './styles/index.scss';

const FilterArticlesContainer = () => {
	return (
		<div className="container">
			<CountryFilter />
			<PagesFilter />
		</div>
	);
};

export default FilterArticlesContainer;
