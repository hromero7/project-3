import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import basketReducer from './basketReducer';

export default combineReducers({
  basketState: basketReducer,
  error: errorReducer,
    auth: authReducer
});
