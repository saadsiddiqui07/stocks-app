export const handleFetchData = async () => {
  const url =
    'https://real-time-finance-data.p.rapidapi.com/market-trends?trend_type=GAINERS&country=us&language=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9f63ccf996msh2386233fa68e266p1af147jsn7fe2aeabaa76',
      'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('RESPONSE', result);
    return result.data.trends;
  } catch (error) {
    console.error(error);
  }
};
