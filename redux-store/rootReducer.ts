import { combineReducers } from 'redux';
import { authReducer, stocksReducer } from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  stocks: stocksReducer,
});

export default rootReducer;
