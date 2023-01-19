import React, { useState } from 'react';
import './styles/index.scss';
import { useLocalStorage } from 'usehooks-ts';

const PagesFilter = () => {
	const [pageSize, setPageSize] = useLocalStorage('pageSize', 10);
	const [pageN, setPageN] = useState(pageSize);

	const onChangeHandler = (e) => {
		setPageSize(e.target.value);
		setPageN(e.target.value);
	};

	return (
		<div className="pages-filter">
			<p> Zmień ilość wiadomości na stronie:</p>
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
