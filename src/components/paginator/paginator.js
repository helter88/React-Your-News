import React from 'react';
import './paginator.scss';
const Paginator = () => {
	return (
		<div className="paginator">
			<div className="paginatorBox">
				<button className="prevPage">Poprzednia</button>
				<span className="currentPage">1</span>
				<button className="nextPage">Następna</button>
			</div>
		</div>
	);
};

export default Paginator;
