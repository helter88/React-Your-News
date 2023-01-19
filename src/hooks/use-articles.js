import Axios from 'axios';
import { useQuery } from 'react-query';
import { API_KEY } from '../../config';

const useArticles = (country, page, pageSize) => {
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

	const { data: articles } = useQuery(['articles'], fetchArticles);

	return { articles };
};

export default useArticles;
