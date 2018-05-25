import { API_BASE_URL } from '../config'


export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = (cheeses) => {
  return {
    type: FETCH_CHEESES_REQUEST,
    cheeses
  };
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (cheeses) => {
  return {
    type: FETCH_CHEESES_SUCCESS,
    cheeses
  };
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (err) => {
  return {
    type: FETCH_CHEESES_ERROR,
    err
  };
}

export const SUBMIT_NEW_CHEESE = 'SUBMIT_NEW_CHEESE';
export const submitNewCheese = (newCheese) => {
  return {
    type: SUBMIT_NEW_CHEESE,
    newCheese
  };
}


export const fetchCheeses = () => {

  return dispatch => {

    dispatch(fetchCheesesRequest());  

    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => res.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err => dispatch(fetchCheesesError(err)))    
  }  
}

export const postCheese = (newCheese) => {
  
  return dispatch => {

    fetch(`${API_BASE_URL}/api/cheeses`, {
      method: 'POST',
      body: JSON.stringify(newCheese),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(cheese => dispatch(fetchCheeses()))
    .catch(err => console.log(err)
    )
    

  }  
}
