export const exerciseOptions  = {
        method: 'GET',
        headers: {

          'X-RapidAPI-Key': '56a9167be4mshe171debed7d8434p10c957jsn468e8ee0a6a2',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }    
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56a9167be4mshe171debed7d8434p10c957jsn468e8ee0a6a2' ,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56a9167be4mshe171debed7d8434p10c957jsn468e8ee0a6a2',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};




export const Testoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56a9167be4mshe171debed7d8434p10c957jsn468e8ee0a6a2',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};




export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data ; 
}