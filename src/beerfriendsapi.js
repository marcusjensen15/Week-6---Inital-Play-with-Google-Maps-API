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
