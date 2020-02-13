import { SEARCH, SELECT, RESULTS, LOADING } from "./actions";
import axios from 'axios';

const defaultState = {
    query: '',
    results: [],
    isLoading: false
}
export function art(state=defaultState, action) {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SEARCH:
            return {
                ...state,
                query: action.payload.query,
            }
        case SELECT:
            return {
                ...state
            }
        case RESULTS:
            return {
                ...state,
                results: action.payload.results
            }
        default:
            break;
    }
}