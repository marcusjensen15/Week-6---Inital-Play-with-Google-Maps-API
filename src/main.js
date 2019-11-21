import $ from 'jquery';
import './beerfriends.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Beer } from './../src/beerfriends.js';
import {ApiCall} from './../src/beerfriendsapi.js';
import {JokeCall} from './../src/beerfriendsapi.js';
// import {MapsApiCall} from './../src/beerfriendsapi.js';

$(document).ready(function() {
  $('#beers').submit(function(event) {
    event.preventDefault();
    const abvLevel = $('input[name=abv]:checked').val();
    const jokeLevel = $('input[name=joke]:checked').val();
    let beer = new Beer(abvLevel);


    const getElements = function(response) {
      $('.showBeerName').text(`${response.name}`);
      $('.showBeerAbv').text(`${response.abv}`);
      $('.showBeerDescription').text(`${response.description}`);
      $('.showImage').append(`<img src="${response.image_url}">`);
    };

    (async () => {
      let apiCall = new ApiCall();
      let jsonifiedResponse = await apiCall.getApiData(beer.searchQuery);
      let randomNumber = (Math.floor(Math.random() * jsonifiedResponse.length));
      getElements(jsonifiedResponse[randomNumber]);
    })();

    const getElements2 = function(response2) {
      if(response2.joke){
        $('.showJoke').text(`${response2.joke}`);
      }
      else{
        $('.showSetup').text(`${response2.setup}`);
        $('.showDelivery').text(`${response2.delivery}`);
      }
    };

    (async () => {
      let jokeCall = new JokeCall();
      let jsonifiedResponse2 = await jokeCall.getJokeData(jokeLevel);
      getElements2(jsonifiedResponse2);
    })();

  });
});
