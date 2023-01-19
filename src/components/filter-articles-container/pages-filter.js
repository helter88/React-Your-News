import React from 'react';
import './styles/index.scss';

const PagesFilter = () => {
	return (
		<div className="pages-filter">
			<p> ilosć wiadomości na stronie:</p>
			<input type="number" min="0" max="100" />
		</div>
	);
};

export default PagesFilter;
