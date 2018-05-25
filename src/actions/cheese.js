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


export const fetchCheeses = () => {

  return dispatch => {

    dispatch(fetchCheesesRequest());  

    fetch(`${API_BASE_URL}/api/cheeses`)
    .then(res => res.json())
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err => dispatch(fetchCheesesError(err)))    
  }

  
}