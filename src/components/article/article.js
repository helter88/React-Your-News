import React from 'react';
import './article.scss';

const Article = () => {
	return (
		<div className="articleContainer">
			<h2>Tytuł</h2>
			<img src="image.jpg" alt="Tytuł" />
			<p className="date">Data</p>
			<p className="shortcut">Zajawka...</p>
		</div>
	);
};

export default Article;
