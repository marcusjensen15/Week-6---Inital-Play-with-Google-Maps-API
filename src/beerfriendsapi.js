export class ApiCall {
  async getApiData(search){
    try {
      let response = await fetch(`https://api.punkapi.com/v2/beers?${search}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

export class JokeCall {
  async getJokeData(search){
    try {
      let response2 = await fetch(`https://sv443.net/jokeapi/category/${search}`);
      let jsonifiedResponse2 = await response2.json();
      return jsonifiedResponse2;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
