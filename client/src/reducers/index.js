import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import globalReducer from './globalReducer';

export default combineReducers({
  task: taskReducer,
  global: globalReducer,
})
