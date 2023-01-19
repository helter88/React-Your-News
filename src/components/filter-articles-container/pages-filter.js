import React, { useEffect, useState } from 'react';
import './styles/index.scss';
import { useLocalStorage } from 'usehooks-ts';

const PagesFilter = () => {
	const [page, setPage] = useLocalStorage('page', 10);
	const [pageN, setPageN] = useState(page);

	const onChangeHandler = (e) => {
		setPage(e.target.value);
		setPageN(e.target.value);
	};

	return (
		<div className="pages-filter">
			<p> zmień ilość wiadomości na stronie:</p>
			<input
				type="number"
				min="0"
				max="100"
				value={pageN}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default PagesFilter;
