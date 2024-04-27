import { StockProps } from '../interfaces/StockProps';
import {
  SET_EMAIL_PASSWORD,
  ADD_STOCK,
  REMOVE_STOCK,
  CLEAR_STOCKS,
} from './actions';

const initialState = {
  email: '',
  password: '',
  stocks: [],
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL_PASSWORD:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

const stocksReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_STOCK:
      return [...state, action.payload];
    case REMOVE_STOCK:
      return state.filter(
        (stock: StockProps) => stock.symbol !== action.payload,
      );
    case CLEAR_STOCKS:
      return {
        state: [],
      };
    default:
      return state;
  }
};

export { authReducer, stocksReducer };
