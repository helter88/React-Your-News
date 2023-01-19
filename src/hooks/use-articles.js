import Axios from 'axios';
import { useQuery } from 'react-query';
import { API_KEY } from '../../config';
import { useLocalStorage } from 'usehooks-ts';

const useArticles = (page) => {
	const [country] = useLocalStorage('country', 'pl');
	const [pageSize] = useLocalStorage('pageSize', 10);
	const fetchArticles = () => {
		return Axios.get(`https://newsapi.org/v2/top-headlines`, {
			params: {
				country: `${country}`,
				pageSize: `${pageSize}`,
				page: `${page}`,
				apiKey: `${API_KEY}`,
			},
		}).then((resp) => resp.data);
	};

	const { data: articles } = useQuery(
		[`articles${country}${page}${pageSize}`],
		fetchArticles
	);

	return { articles };
};

export default useArticles;
