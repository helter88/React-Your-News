import React from 'react';
import Article from '../article/article';
import './articles-container.scss';

const ArticlesContainer = () => {
	return (
		<div className="articlesContainer">
			<Article />
			<Article />
		</div>
	);
};

export default ArticlesContainer;
