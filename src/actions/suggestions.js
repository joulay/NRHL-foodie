import { REACT_APP_YELP_KEY } from '../config';

export const FETCH_SUGGESTIONS_REQUEST = 'FETCH_SUGGESTIONS_REQUEST';
export const fetchSuggestionsRequest = () => ({
    type: FETCH_SUGGESTIONS_REQUEST
});

export const FETCH_SUGGESTIONS_SUCCESS = 'FETCH_SUGGESTIONS_SUCCESS';
export const fetchSuggestionsSuccess = places => ({
    type: FETCH_SUGGESTIONS_SUCCESS,
    places
});

export const FETCH_SUGGESTIONS_ERROR = 'FETCH_SUGGESTIONS_ERROR';
export const fetchSuggestionsError = error => ({
    type: FETCH_SUGGESTIONS_ERROR,
    error
});




export const fetchSuggestions = (input, price) => dispatch => {
  if(input === '') {
    input = 'food'
  }
    dispatch(fetchSuggestionsRequest());
    //console.log('this is our', REACT_APP_YELP_KEY);
    fetch(`https://fast-beach-47884.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=${input}&sort_by=rating&limit=50&latitude=34.048203&longitude=-118.258949&radius=805&price=${price}`, {
      method: "GET",
      dataType: "JSON",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${REACT_APP_YELP_KEY}`
      }
    })
    .then((results) => results.json()) 
    .then((data) => {
      let randomSuggestion = data.businesses[Math.floor(Math.random()*data.businesses.length)];
      // console.log('randomly selects one from returned data', randomSuggestion);
      dispatch(fetchSuggestionsSuccess(randomSuggestion));
    })
    .catch((error) => {
      console.log(error, "catch the hoop");
      dispatch(fetchSuggestionsError(error));
    })
  }