import { combineReducers } from 'redux';
import batteriesReducer from '../features/batteriesSlice';
import { configureStore } from '@reduxjs/toolkit';

const allReducers = combineReducers({
  batteries: batteriesReducer,
});

export default allReducers;
