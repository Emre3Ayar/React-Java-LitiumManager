//import contactsReducer from './contacts';
//import transactionsReducer from './transactions';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import elementsReducer from '../../features/elementSlice';

import batteriesReducer from '../../features/batteriesSlice';

export const allReducers = combineReducers({
    batteries: batteriesReducer
});
//users: usersReducer
export default allReducers;
