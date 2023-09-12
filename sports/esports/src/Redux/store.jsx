import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combindreducer.jsx';

const store = configureStore({ reducer: rootReducer });

export default store;