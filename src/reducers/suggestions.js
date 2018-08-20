import { FETCH_SUGGESTIONS_REQUEST,
         FETCH_SUGGESTIONS_SUCCESS,
         FETCH_SUGGESTIONS_ERROR
} from '../actions/suggestions';

const initialState = {
    suggestions: [],
    loading: false,
    error: false
}

export default function suggestionsReducer(state=initialState, action) {
    if (action.type === FETCH_SUGGESTIONS_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_SUGGESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            suggestions: action.places,
            loading: false,
            error: false
        });
    }
    else if (action.type === FETCH_SUGGESTIONS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}