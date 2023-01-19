import React from 'react';
import './article.scss';

const noImagePath =
	'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

const Article = ({ title, description, date, imageUrl, articleUrl }) => {
	const appropriateDescription =
		description?.length >= 60 ? `${description.slice(0, 61)} ...` : description;
	const currentDate = new Date(date);
	const dd = currentDate?.getDate();
	const mm = `${currentDate?.getMonth() + 1}`?.padStart(2, 0);
	const yyyy = currentDate?.getFullYear();
	const adaptedDate = `${dd}.${mm}.${yyyy}`;

	const onImageError = (e) => {
		console.log('ingo from error image');
		e.currentTarget.src = noImagePath;
	};

	const onHandleClick = () => {
		window.open(articleUrl, '_blank', 'noopener,noreferrer');
	};

	return (
		<article className="articleContainer" onClick={onHandleClick}>
			<h3>{title}</h3>
			<img src={imageUrl} alt="Tytuł" onError={onImageError} />
			<p className="date">{adaptedDate}</p>
			<p className="shortcut">{appropriateDescription}</p>
		</article>
	);
};

export default Article;
