const fetchNews = async (page = 1, qtd = 12) => {
	const url = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${qtd}&page=${page}`;
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

export default fetchNews;
