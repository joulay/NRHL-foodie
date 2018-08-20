import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import suggestionsReducer from './reducers/suggestions';

export default createStore(
    suggestionsReducer,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
    applyMiddleware(thunk)
);