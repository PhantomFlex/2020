import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { stepReducer } from './stepReducer';
export default combineReducers({
    inputReducer,
    steps: stepReducer
}); 