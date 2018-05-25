import { 
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR,
  SUBMIT_NEW_CHEESE
   
} from '../actions/cheese';

const initialState = {
  cheeses: [],
  loading: false,
  error: null,
};

export default function cheeseReducer(state = initialState, action){

  switch(action.type){

    case FETCH_CHEESES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CHEESES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cheeses: action.cheeses
      }
    case FETCH_CHEESES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.err.message,
      }
    case SUBMIT_NEW_CHEESE:
      return {
        ...state,
        loading: false,
        cheeses: [...state.cheeses,action.newCheese] 
      }
      default:
        return state
    
  }
}