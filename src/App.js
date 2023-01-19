import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import CenterContainer from './components/center-container/center-container';
import FilterArticlesContainer from './components/filter-articles-container';
import Header from './components/header/header';
import Paginator from './components/paginator/paginator';

const App = () => {
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<div>
				<Header />
				<FilterArticlesContainer />
				<CenterContainer />
				<Paginator />
			</div>
		</QueryClientProvider>
	);
};

export default App;
