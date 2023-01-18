import React from 'react';
import Header from './components/header/header';
import ArticlesContainer from './components/articless-container/articles-container';
import Paginator from './components/paginator/paginator';
const App = () => {
	return (
		<div>
			<Header />
			<ArticlesContainer />
			<Paginator />
		</div>
	);
};

export default App;
