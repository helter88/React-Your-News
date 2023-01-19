import React, { useEffect, useState } from 'react';
import './paginator.scss';
import { useLocalStorage } from 'usehooks-ts';

const Paginator = ({ totalArtNum, pushCurrPage }) => {
	const [currPage, setCurrentPage] = useState(1);
	const [pageSize] = useLocalStorage('pageSize', 10);

	const prevPageHandler = () => {
		if (currPage === 1) {
			return;
		} else {
			setCurrentPage((val) => (val -= 1));
		}
	};

	const nextPageHandler = () => {
		if (pageSize * currPage < totalArtNum) {
			setCurrentPage((val) => (val += 1));
		} else {
			return;
		}
	};
	useEffect(() => {
		pushCurrPage(currPage);
	}, [currPage]);

	return (
		<div className="paginator">
			<div className="paginatorBox">
				<button className="prevPage" onClick={prevPageHandler}>
					Poprzednia
				</button>
				<span className="currentPage">{currPage}</span>
				<button className="nextPage" onClick={nextPageHandler}>
					Następna
				</button>
			</div>
		</div>
	);
};

export default Paginator;
