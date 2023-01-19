import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CenterContainer from './components/center-container/center-container';
import FilterArticlesContainer from './components/filter-articles-container';
import Header from './components/header/header';
import Paginator from './components/paginator/paginator';

const App = () => {
	const client = new QueryClient();
	const [totalArtNum, setTotalArtNum] = useState(0);
	const [currPage, setCurrPage] = useState(1);
	const handleTotalArticlesNum = (artnum) => {
		setTotalArtNum(artnum);
	};
	const handleCurrPage = (currPage) => {
		setCurrPage(currPage);
	};
	return (
		<QueryClientProvider client={client}>
			<div>
				<Header />
				<FilterArticlesContainer />
				<CenterContainer
					getTotalArticlesNum={handleTotalArticlesNum}
					currPage={currPage}
				/>
				<Paginator totalArtNum={totalArtNum} pushCurrPage={handleCurrPage} />
			</div>
		</QueryClientProvider>
	);
};

export default App;
