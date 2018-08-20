import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import suggestionsReducer from './reducers/suggestions';

export default createStore(
    suggestionsReducer,
    applyMiddleware(thunk)
);