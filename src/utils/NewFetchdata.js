const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  params: {muscle: 'biceps'},
  headers: {
    'X-RapidAPI-Key': '56a9167be4mshe171debed7d8434p10c957jsn468e8ee0a6a2',
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


