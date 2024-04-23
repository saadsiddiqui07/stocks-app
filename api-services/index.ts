export const handleFetchData = async () => {
  const url =
    'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en&limit=5';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f8293ee274msh7cec4216d5c79c0p141008jsnc3444444ceb8',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.data.trends;
  } catch (error) {
    console.error(error);
  }
};
