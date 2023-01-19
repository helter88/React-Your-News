import React from 'react';
import useArticles from '../../hooks/use-articles';
import Article from '../article/article';
import './center-container.scss';
import { useLocalStorage } from 'usehooks-ts';
import { getKeyByValue } from '../../utils/get-key';
import { countryIso } from '../filter-articles-container/country-filter';

const CenterContainer = () => {
	const [country] = useLocalStorage('country', 'pl');
	const [pageSize] = useLocalStorage('pageSize', 10);
	const { articles } = useArticles(1);

	const articlesArr = articles?.articles;

	const articlesList = articlesArr?.map(
		({ title, description, publishedAt, urlToImage, url }) => {
			return (
				<Article
					key={publishedAt}
					title={title}
					description={description}
					date={publishedAt}
					imageUrl={urlToImage}
					articleUrl={url}
				/>
			);
		}
	);

	if (!articlesList) {
		return;
	}

	return (
		<main>
			<div className="text-box">
				<h2>
					Wyświetlono {pageSize} najnowszych wiadomości dla kraju:{' '}
					{getKeyByValue(countryIso, country)}
				</h2>
			</div>
			<div className="articles-container">{articlesList}</div>
		</main>
	);
};

export default CenterContainer;
