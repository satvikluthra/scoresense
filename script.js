const apikey = '18bc5646bfmshdb60fdc417a5723p16547ajsn7af49abf3069';
const host = 'api-football-v1.p.rapidapi.com';

const fetchData = async (endpoint) => {
  const url = `https://api-football-v1.p.rapidapi.com/v3/${endpoint}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apikey,
      'X-RapidAPI-Host': host
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Access league names directly from the result
    const leagueNames = result.response.map(league => league.league.name);
    console.log(leagueNames);

  } catch (error) {
    console.error(error);
  }
};

fetchData('leagues');
